const express = require('express');
const {
    getProductById, 
    getProducts,
    getProductsByCategory,
    deleteProductById
} = require('../controllers/product-controller');

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/category', getProductsByCategory);
router.get('/products/:id', getProductById);
router.delete('/products/:id', deleteProductById);

module.exports = router;