const express = require('express');
const {
    verificationUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user-controller');

const router = express.Router();

router.post("/login:id", verificationUser);
router.post("/register", createUser);
router.put("/:id", updateUser)
router.delete("/:id", deleteUser);

module.exports = router;