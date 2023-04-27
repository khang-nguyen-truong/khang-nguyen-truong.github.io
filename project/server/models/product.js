const path = require('path');
const fs = require('fs');

class Product {
	constructor(id, name, price, image, stock) {
		this.id = id;
		this.name = name;
		this.image = fs.readFileSync(path.join(__dirname, '..', 'images', image)).toString('base64');
		this.price = price;
		this.stock = stock;
	}

	save() {
		db.push(this);
		return this;
	}

	static getAll() {
		return db;
	}

	static updateStock(quantity) {
		this.stock += quantity;
	}

	static getMaxStockProductByName(productName) {
		const p = db.find((p) => p.name == productName);
		return p.stock;
	}

	static deductStock(cartList) {
		let result = '';
		for (let c of cartList) {
			let idx = db.findIndex((p) => p.name == c.productName);
			let pro = db[idx];
			if (pro.stock - c.productQuantity >= 0) {
				pro.stock = pro.stock - c.productQuantity;
			} else {
				result += c.productName + ', ';
			}
		}
		return result;
	}
}

let db = [];
let nodejs = new Product(1, 'Node.js', 9.99, 'nodejs.png', 8);
let react = new Product(2, 'React', 19.99, 'react.png', 5);
let angular = new Product(3, 'Angular', 29.99, 'angular.png', 13);
db.push(nodejs);
db.push(react);
db.push(angular);

module.exports = Product;
