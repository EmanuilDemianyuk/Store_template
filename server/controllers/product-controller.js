const Product = require('../models/product');

const handlerError = (res, error) => {
    res.status(500).json({ error })
};

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
    Product
    .findById((req.params.id))
    .then((product) => {
      res
      .status(200)
      .json(product);
    })
    .catch((err) => handlerError(res, err));
};

const deleteProductById = (req, res) => {
    Product
    .findByIdAndDelete((req.params.id))
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