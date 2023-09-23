const mongoose = require('mongoose')

const mongo_url = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        const dbHost = await mongoose.connect(mongo_url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log(`Connected To DB`);
    } catch (error) {
        console.log('Cannot Connect To DB');
        console.log(error);
    }
}

module.exports = connectDB;