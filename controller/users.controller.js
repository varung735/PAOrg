const jwt = require('jsonwebtoken');
const asyncHandler = require('../services/asyncHandler');
const ErrorHandler = require('../services/errorHandler');
const jwt_secret = process.env.JWT_SECRET;

exports.loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    
    if(!username || !password){
        throw new ErrorHandler('Username or Password is empty', 400);
    }
    else{
        // hard coded user
        const user = {
            username: 'username',
            password: 'password'
        }

        if (username !== user.username || password !== user.password) {
            throw new ErrorHandler('Invalid Credentials', 400);
        }
        else {
            const token = jwt.sign(user, jwt_secret, { expiresIn: '7d' });

            res.status(200).json({
                success: true,
                message: 'Login Successful',
                token: token
            });
        }
    }
});

