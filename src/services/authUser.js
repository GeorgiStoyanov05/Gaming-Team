const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.RegisterUser = async(username, email, password)=>{
        const user = await User.find({email}).lean();

        if (user.length!==0){
            throw new Error('User already exists!');
        }
    
        const registeredUser = new User({username, email, password});
    
        await registeredUser.save();
    
        return registeredUser;
}

exports.LoginUser = async(email, password)=>{

    const user = await User.findOne({email});

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!user || !validatePassword){
        throw new Error('Wrong username or password!');
    }

    const payload = { _id: user._id, username: user.username };
    const token = jwt.sign(payload, 'verySecret', { expiresIn: '2h' });

    return token;

}
