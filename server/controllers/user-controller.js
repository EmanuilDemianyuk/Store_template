const User = require('../models/user');

const { handlerError } = require('../functions/functions');


const createUser = (req, res) => {
    const { body } = req;
    const { email } = body;

    User
    .findOne({ email })
    .then(existingUser => {
        if (existingUser) {
            return res
                   .status(409)
                   .json({ error: "The user already exists in the database" });
        } 
        else {
            
            User
            .create(body)
            .then((user) => {
                res
                .status(200)
                .json(user);
            })
            .catch((err) => handlerError(res, err));
        }
    })
    .catch((err) => handlerError(res, err));
}

const verificationUser = (req, res) => {
    const { body: { email, password } } = req;

    User
    .findOne({email: email})
    .then((user) => {
        if(user) {
            if(user.password === password) {
                res
                .status(200)
                .json({
                    message: "Success",
                    userData: user
                })
            }
            else {
                res
                .status(401)
                .json({message: "The data entered is incorrect..."})
            }
        }
        else {
            res
            .status(401)
            .json({message: "The user is not registered"})
        }
    })
    .catch((err) => handlerError(res, err))
}

const updateUser = (req, res) => {
    const { params: { id }, body } = req;

    User
    .findByIdAndUpdate(id, body)
    .then((user) => {
        res
        .status(201)
        .json(user)
    })
    .catch((err) => handlerError(res, err))
} 

const deleteUser = (req, res) => {
    const { params: { id } } = req;

    User
    .findByIdAndDelete(id)
    .then((user) => {
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