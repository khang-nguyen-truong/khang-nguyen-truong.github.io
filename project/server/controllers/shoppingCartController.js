const ShoppingCart = require('../models/shoppingcart');
const Product = require('../models/product');

exports.getAll = (req, res, next) => {
	if (validateAccessTokenHeader(req)) {
		next(new Error('Invalid Access Token'));
	} else {
		const list = ShoppingCart.getAll();
		if (list != undefined) {
			res.status(200).json(list);
		} else {
			next(new Error('Something wrong!'));
		}
	}
};

exports.getShoppingCartByUsername = (req, res, next) => {
	if (validateAccessTokenHeader(req)) {
		next(new Error('Invalid Access Token'));
	} else {
		const list = ShoppingCart.getShoppingCartByUsername(req.params.username);
		res.status(200).json(list);
	}
};

exports.save = (req, res, next) => {
	if (validateAccessTokenHeader(req)) {
		next(new Error('Invalid Access Token'));
	} else {
		const item = new ShoppingCart(
			req.body.id,
			req.body.username,
			req.body.productName,
			req.body.productPrice,
			req.body.productPrice * req.body.productQuantity,
			req.body.productQuantity
		);
		const curCartItem = ShoppingCart.getShoppingCartByUsernameAndProductName(
			req.body.username,
			req.body.productName
		);
		let resItem;
		if (!curCartItem) {
			resItem = item.save();
			res.status(201).json(item);
		} else {
			let maxOfStock = Product.getMaxStockProductByName(req.body.productName);
			let productQuantity = parseInt(curCartItem.productQuantity) + parseInt(item.productQuantity);
			if (productQuantity > maxOfStock) {
				next(new Error('This product is out of stock!'));
			} else {
				item.id = curCartItem.id;
				item.productQuantity = productQuantity;
				resItem = item.edit();
				res.status(200).json(item);
			}
		}
		if (!resItem) {
			next(new Error('Something wrong!'));
		}
	}
};

exports.edit = (req, res, next) => {
	if (validateAccessTokenHeader(req)) {
		next(new Error('Invalid Access Token'));
	} else {
		let maxOfStock = Product.getMaxStockProductByName(req.body.productName);
		if (req.body.productQuantity > maxOfStock) {
			next(new Error('This product is out of stock!'));
		} else {
		const item = new ShoppingCart(
			req.params.shoppingCartId,
			req.body.username,
			req.body.productName,
			req.body.productPrice,
			req.body.total,
			req.body.productQuantity
		).edit();
		if (item != undefined) {
			res.status(200).json(item);
		} else {
			next(new Error('Something wrong!'));
		}
		}
	}
};

exports.deleteById = (req, res, next) => {
	if (validateAccessTokenHeader(req)) {
		next(new Error('Invalid Access Token'));
	} else {
		const delIdx = ShoppingCart.delete(req.params.shoppingCartId);
		if (delIdx != undefined) {
			res.status(200).json(delIdx);
		} else {
			next(new Error('Something wrong!'));
		}
	}
};

exports.placeOrder = (req, res, next) => {
	if (validateAccessTokenHeader(req)) {
		next(new Error('Invalid Access Token'));
	} else {
		const shoppingCartList = ShoppingCart.getShoppingCartByUsername(req.params.username);
		const deductRes = Product.deductStock(shoppingCartList);
		const delIdx = ShoppingCart.placeOrder(req.params.username);
		if (deductRes === '' && delIdx < 0) {
			res.status(200).json(delIdx);
		} else {
		if (deductRes !== '') {
			res.status(200)
				.json('This product is out of stock!');
		} else {
			next(new Error('Something wrong!'));
		}
		}
	}
};

function validateAccessTokenHeader(req) {
	const accessToken = req.headers['access-token'];
	return !accessToken || accessToken === '';
}