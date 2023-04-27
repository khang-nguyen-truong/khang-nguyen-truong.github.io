const User = require('../models/user');

exports.login = (req, res, next) => {
	let username = req.body.username;
	let password = req.body.password;
	const userLogin = User.login(username, password);
	
	if (userLogin != undefined) {
		res.status(200).json(userLogin);
	} else {
		next(new Error('Invalid username or password!'));
	}
};