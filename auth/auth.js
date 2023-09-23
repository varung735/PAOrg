const jwt = require('jsonwebtoken');
const asyncHandler = require('../services/asyncHandler');
const ErrorHandler = require('../services/errorHandler');
const jwt_secret = process.env.JWT_SECRET;

const verifyToken = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization || req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token){
        throw new ErrorHandler('Token Not Found', 403);
    }
    else{
        try {
            const decodedToken = jwt.verify(token, jwt_secret);
            // console.log(decodedToken);

            next();
        } catch (error) {
            console.log(error);
            throw new ErrorHandler(error.message, 403);
        }
    }
});

module.exports = verifyToken;