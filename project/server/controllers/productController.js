const Product = require('../models/product');

exports.getAll = (req, res, next) => {
	if (validateAccessTokenHeader(req)) {
		next(new Error('Invalid Access Token'));
	} else {
		const productList = Product.getAll();
		if (productList != undefined) {
			res.status(200).json(productList);
		} else {
			next(new Error('Something wrong!'));
		}
	}
};

function validateAccessTokenHeader(req) {
	const accessToken = req.headers['access-token'];
	return !accessToken || accessToken === '';
}