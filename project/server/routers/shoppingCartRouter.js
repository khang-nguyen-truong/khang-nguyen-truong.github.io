const express = require('express');
const shoppingCartController = require('../controllers/shoppingCartController');
const router = express.Router();

router.get('/', shoppingCartController.getAll);
router.post('/', shoppingCartController.save);
router.get('/users/:username/carts', shoppingCartController.getShoppingCartByUsername);
router.put('/:shoppingCartId', shoppingCartController.edit);
router.delete('/:shoppingCartId', shoppingCartController.deleteById);
router.post('/users/:username/place-order', shoppingCartController.placeOrder);

module.exports = router;