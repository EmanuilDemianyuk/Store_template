const handlerError = (res, error) => {
    res.status(500).json({ error })
};

module.exports = handlerError;