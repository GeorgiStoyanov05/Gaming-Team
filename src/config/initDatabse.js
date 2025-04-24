const mongoose = require('mongoose')

async function initDatabase(app){

mongoose.set('strictQuery', false);

await mongoose.connect('mongodb+srv://gogotobg2:4lpyRpzpISMbquyO@jsbackend.4jxw52c.mongodb.net/gaming');

console.log("DB connected");

}

module.exports = initDatabase;