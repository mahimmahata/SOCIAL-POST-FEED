const mongoose = require("mongoose");
const DNS = require("dns");

DNS.setServers([
    '1.1.1.1',
    '8.8.8.8'
])



async function connectDB(){
    await mongoose.connect(process.env.DB_URI);
    console.log("DB connected");
}


module.exports = connectDB;