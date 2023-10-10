const express = require('express');
const fs = require('fs');

const router = express.Router();
const filePathPizza = `${__dirname}/../../../storage/data/pizza.json`; 
const filePathDrinks = `${__dirname}/../../../storage/data/drinks.json`; 
const filePathDesserts = `${__dirname}/../../../storage/data/desserts.json`; 
const filePathSideDishes = `${__dirname}/../../../storage/data/sideDishes.json`; 


const readFiles = (...arrayData) => {
    const dataFile = arrayData.map(file => JSON.parse(fs.readFileSync(file, 'utf8')));
    return [].concat(...dataFile)
}
const searchRatingItem = (data, rating) => {
    return data.filter(item => item.rating >= +rating)
}
const getJsonData = ({ rating }) => {
    const rawData = readFiles(
        filePathPizza,
        filePathDesserts,
        filePathDrinks,
        filePathSideDishes
    );
    const dataJson = rawData || [];

    return searchRatingItem(dataJson, rating)
}

router.get('/', (req, res) => {
    return res.json(getJsonData(req.query))
})

module.exports = router;

// 404 error

router.use((req, res, next) => {
    const error = new Error('Resource not found');
    error.status = 404;
    next(error);
});


// 500 error

router.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res
    .status(status)
    .json({
        error: {
            status: status,
            message: message
        }
    })
})


