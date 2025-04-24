const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 4
    },
    image: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Invalid URL']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true,
        minLenght: 10
    },
    genre: {
        type: String,
        required: true,
        minLenght: 2
    },
    platform: {
        type: String,
        required: true,
        enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"]   
    },
    boughtBy: {
        type: Array,
        ref: 'User'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});


const Game = mongoose.model("Game", gameSchema);

module.exports = Game;