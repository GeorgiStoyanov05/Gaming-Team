const mongoose = require('mongoose')

async function initDatabase(app){

mongoose.set('strictQuery', false);

require("dotenv").config();
await mongoose.connect(process.env.MONGO_URI);

console.log("DB connected");

}

module.exports = initDatabase;
