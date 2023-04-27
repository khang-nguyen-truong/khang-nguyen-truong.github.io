class ShoppingCart {
	constructor(id, username, productName, productPrice, total, productQuantity) {
		this.id = id;
		this.username = username;
		this.productName = productName;
		this.productPrice = productPrice;
		this.total = total;
		this.productQuantity = productQuantity;
	}

	save() {
		this.id = ++counter;
		db.push(this);
		return this;
	}

	static getAll() {
		return db;
	}

	static getShoppingCartByUsername(username) {
		return db.filter((item) => item.username === username);
	}

	static getShoppingCartByUsernameAndProductName(username, productName) {
		return db.find((item) => item.username === username && item.productName === productName);
	}

	static delete(id) {
		const index = db.findIndex((s) => s.id == id);
		const deletedProd = db[index];
		db.splice(index, 1);
		return deletedProd;
	}

	static placeOrder(username) {
		let index = db.findIndex((s) => s.username == username);
		while (index >= 0) {
			db.splice(index, 1);
			index = db.findIndex((s) => s.username == username);
		}
		return index;
	}

	edit() {
		const index = db.findIndex((s) => s.id == this.id);
		db.splice(index, 1, this);
		return this;
	}
}
let counter = 0;
let db = [];

module.exports = ShoppingCart;