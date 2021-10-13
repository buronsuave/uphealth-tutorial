const express = require('express');
const router = express.Router();

// Imports of controllers
const { getProducts } = require('../controllers/product_controller');
const { getProduct } = require('../controllers/product_controller');
const { addProduct } = require('../controllers/product_controller');
const { deleteProduct } = require('../controllers/product_controller');
const { updateProduct } = require('../controllers/product_controller');

router.get('/products', getProducts);
router.post('/products', addProduct);
router.put('/products', updateProduct);

router.get('/product/:id', getProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;