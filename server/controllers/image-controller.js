const express = require('express');
const path = require('path');

const getImage = (req, res) => {
    const { icon } = req.query;
    const imagePath = path.join(__dirname,'../', 'storage', 'image', `${icon}`);
    return res.sendFile(imagePath);
}

module.exports = {getImage}