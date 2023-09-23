const express = require('express');
const { createUser, loginUser } = require('../controller/users.controller');

const userRouter = express.Router();

userRouter.post('/login', loginUser);

module.exports = userRouter;