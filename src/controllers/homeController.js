const Game = require('../models/Game');

exports.getHomePage = (req, res)=>{

    res.render('home');
}

exports.getCatalogPage = async(req, res)=>{
    const games = await Game.find().lean();
    
    res.render('catalog', {games});
}