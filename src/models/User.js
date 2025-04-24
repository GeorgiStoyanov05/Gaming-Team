const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
    },
    email: {
        type: String,
        required: true,
        minLenght: 10,
    },
    password: {
        type: String,
        required: true,
        minLenght: 4,
    }
});

userSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
    .then(hash=>{
        this.password = hash;
        next();
    })
})


const User = mongoose.model("User", userSchema);

module.exports = User;