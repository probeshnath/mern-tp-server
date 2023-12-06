const mongoose = require('mongoose');

const URI = process.env.DB_URI;
// mongoose.connect(URI)

const connectDB = async () =>{
    try {
        await mongoose.connect(URI)
        console.log('DB Connected Successfully')
    } catch (error) {
        console.error("connection failed")
        process.exit(0)
    }
}


module.exports = connectDB
