require('dotenv').config();
const express = require('express');
const userRouter = require('./router/users.router');
const contriesRouter = require('./router/contries.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/countries', contriesRouter);

module.exports = app