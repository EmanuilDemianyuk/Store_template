const Product = require('../models/product');

const handlerError = require('../functions/functions');

const getProducts = (req, res) => {
    const { rating } = req.query;
    const activeKey = (rating) 
                      ? {
                            rating: { $gte: +rating }
                        }
                      : null
    Product
    .find(activeKey)
    .then((products) => {
        res
        .status(200)
        .json(products);
    })
    .catch((err) => handlerError(res, err));
};
const getProductsByCategory = (req, res) => {
    const { value } = req.query;
    Product
    .find({category: value})
    .then((products) => {
        res
        .status(200)
        .json(products);
    })
    .catch((err) => handlerError(res, err));
}
const getProductById = (req, res) => {
    const { id } = req.params;
    Product
    .findById((id))
    .then((product) => {
      res
      .status(200)
      .json(product);
    })
    .catch((err) => handlerError(res, err));
};

const deleteProductById = (req, res) => {
    const { id } = req.params;
    Product
    .findByIdAndDelete((id))
    .then((result) => {
      res
      .status(200)
      .json(result);
    })
    .catch((err) => handlerError(res, err));
};

module.exports = {
    getProductById,
    getProductsByCategory,
    getProducts,
    deleteProductById
}