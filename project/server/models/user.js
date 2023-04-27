class User {
	constructor(id, username, password) {
		this.id = id;
		this.username = username;
		this.password = password;
	}

	save() {
		db.push(this);
		return this;
	}

	static getAll() {
		return db;
	}

	static login(username, password) {
		const index = db.findIndex((u) => u.username === username && u.password === password);
		if (index >= 0) {
			return { username: db[index].username, logindate: new Date() };
		}
	}
}
  
let db = [];
let user1 = new User(1, 'Nguyen', 'me');
let user2 = new User(2, 'Khang', 'myself');
let user3 = new User(3, 'Truong', 'andi');
db.push(user1);
db.push(user2);
db.push(user3);

module.exports = User;