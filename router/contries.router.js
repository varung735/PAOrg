const express = require('express');
const { getCountryDetails, filterCountries } = require('../controller/countries.controller');
const verifyToken = require('../auth/auth');

const countriesRouter = express.Router();

countriesRouter.post('/getCountryDetails', verifyToken, getCountryDetails);
countriesRouter.post('/filterCountries', verifyToken, filterCountries);

module.exports = countriesRouter;