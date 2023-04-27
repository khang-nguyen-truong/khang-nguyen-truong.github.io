const express = require('express');
const loginRouter = require('./routers/loginRouter');
const productRouter = require('./routers/productRouter');
const shoppingCartRouter = require('./routers/shoppingCartRouter');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/shoppingcarts', shoppingCartRouter);

app.use((req, res, next) => {
	res.status(404).send('404');
});
app.use((err, req, res, next) => {
	if (err.message === 'Not Found') {
		res.status(404).json({ error: err.message });
	} else {
		res.status(500).json({ error: 'Something is wrong! Try later' });
	}
});

app.listen(3000, () => console.log('listening on port 3000...'));
