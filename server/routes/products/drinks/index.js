const express = require('express');
const fs = require('fs');

const router = express.Router();
const filePath = `${__dirname}/../../../storage/data/drinks.json`; 

const checker = (rawData) => {
    return (rawData === 0) ? [] : rawData
}

const getJsonData = () => {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(checker(rawData));
}

router.get('/', (req, res) => {
    return res.json(getJsonData())
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


