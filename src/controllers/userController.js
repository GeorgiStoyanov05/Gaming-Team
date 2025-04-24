const User = require('../models/User');
const authUser = require('../services/authUser');

exports.getLoginPage = (req, res)=>{
    res.render('login');
}


exports.postLoginPage = async(req, res)=>{

    try {

        const {email, password} = req.body;

        const token = await authUser.LoginUser(email, password);
    
        res.cookie('auth', token, { httpOnly: true });
    
        res.redirect('/');
        
    } catch (error) {

        res.render('login', {error: error.message});
        
    }
}


exports.getRegisterPage = (req, res)=>{
    res.render('register');
}

exports.postRegisterPage = async(req, res)=>{
    
    try {
        const {username, email, password, rePassword} = req.body;
        
        if (password!==rePassword){
            throw new Error("Passwords don't match!");
        }
        else {
            const user = await authUser.RegisterUser(username, email, password);

            const token = await authUser.LoginUser(email, password);
            
            res.cookie('auth', token, { httpOnly: true });

            res.redirect('/');
        }
    
    } catch (error) {
        res.render('register', {error: error.message})
    }
}

exports.getLogout = async(req, res)=>{
    res.clearCookie('auth');

    res.redirect('/');
}