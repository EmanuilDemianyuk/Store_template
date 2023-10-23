const User = require('../models/user');

const handlerError = require('../functions/functions');


const createUser = (res, req) => {
    const { body } = req;
    
    User
    .create(body)
    .than((user) => {
        res
        .status(200)
        .json(user)
    })
    .catch((err) => handlerError(res, err))
}

const verificationUser = (res, req) => {
    const { params: { id }, body: { email, password } } = req;

    User
    .findById(id)
    .than((user) => {
        if(user.email === email && user.password === password) {
            res
            .status(200)
            .json("Success")
        }
        else {
            res
            .status(200)
            .json("The data entered is incorrect...")
        }
    })
    .catch((err) => handlerError(res, err))
}

const updateUser = (res, req) => {
    const { params: { id }, body } = req;

    User
    .findByIdAndUpdate(id, body)
    .than((user) => {
        res
        .status(201)
        .json(user)
    })
    .catch((err) => handlerError(res, err))
} 

const deleteUser = (res, req) => {
    const { params: { id } } = req;

    User
    .findByIdAndDelete(id)
    .than((user) => {
        res
        .status(200)
        .json(user)
    })
    .catch((err) => handlerError(res, err))
} 


module.exports = {
    createUser,
    verificationUser,
    updateUser,
    deleteUser
}