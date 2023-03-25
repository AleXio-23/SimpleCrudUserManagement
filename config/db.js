const mongoose = require('mongoose');

const connectDatabase = async () => {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline.bold);
} 

module.exports = connectDatabase;   