const asyncHandler = require('../services/asyncHandler');
const ErrorHandler = require('../services/errorHandler');
const api_link = process.env.API_LINK;

exports.getCountryDetails = asyncHandler(async (req, res) => {
    const { countryName } = req.body;

    if(!countryName){
        throw new ErrorHandler('Country name cannot be empty', 400);
    }
    else{
        try {
            const response = await fetch(`${api_link}/name/${countryName}`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const countryDetails = await response.json();
            
            res.status(200).json({
                success: true,
                message: 'Got Country Details Successfully',
                officialName: countryDetails[0].name.official,
                capital: countryDetails[0].capital,
                language: countryDetails[0].languages,
                status: countryDetails[0].status,
                currency: countryDetails[0].currencies,
                population: countryDetails[0].population
            });
        } catch (error) {
            console.log(error);
            throw new ErrorHandler('Cannot Get Country Details', 500);
        }
    }
});

exports.filterCountries = asyncHandler(async (req, res) => {
    const { page = 1 } = req.query;
    const { filter, filterValue } = req.body;
    const pageSize = 5;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    if (!filter) {
      throw new ErrorHandler('Filter cannot be empty', 400);
    } else {
      try {
        const response = await fetch(`${api_link}/${filter}/${filterValue}`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
  
        const countries = await response.json();
        const reqCountries = countries.slice(startIndex, endIndex);
  
        res.status(200).json({
          success: true,
          message: 'Got Countries Successfully',
          currentPage: page,
          totalPages: Math.ceil(countries.length / pageSize),
          countries: reqCountries,
        });
      } catch (error) {
        console.error(error);
        throw new ErrorHandler(error.message, 500);
      }
    }
  });