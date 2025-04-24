const Game = require('../models/Game');
const gameUtil = require('../utils/gameUtil');

exports.getCreatePage = (req, res)=>{
    res.render('create');
}
exports.postCreatePage = async(req, res)=>{
    const {platform, name, imageUrl, price, genre, description} = req.body;
    const owner = req.user._id;
    try{
        await Game.create({platform, name, image: imageUrl, price, genre, description, owner});
        res.redirect('/catalog');
    } catch(err){
        res.render('create', {error: err.message});
    }

}

exports.getDetailsPage = async(req, res)=>{
    const game = await Game.findById(req.params.id).populate('owner').lean();
    if(req.user){
        const user = req.user;
        const isOwner = user._id==game.owner._id;
        const hasBought = game.boughtBy.includes(user._id);
        res.render('details', {...game, user, isOwner, hasBought});
    }
    else{
        res.render('details', {...game});
    }
}

exports.getDelete = async(req, res)=>{
    await Game.findByIdAndDelete(req.params.id);
    res.redirect('/catalog');
}

exports.getEditPage = async(req, res)=>{
    const game = await Game.findById(req.params.id).lean();
    const platforms = gameUtil.generatePlatform(game.platform)
    res.render('edit', {...game, platforms});
}

exports.postEditPage = async(req, res)=>{
    const {name, image, price, genre, description, platform} = req.body;
    await Game.findByIdAndUpdate(req.params.id, {name, image, price, genre, description, platform});

    res.redirect(`/details/${req.params.id}`);
}

exports.getBuyGame = async(req, res)=>{
    const game = await Game.findById(req.params.id).lean();
    const boughtBy = game.boughtBy;
    boughtBy.push(req.user._id);
    await Game.findByIdAndUpdate(req.params.id, {...game, boughtBy});
}

exports.getSearchPage = async(req, res)=>{
    const games = await Game.find().lean();
    res.render('search', {games});
}

exports.postSearchPage = async(req, res)=>{
    const {name, platform} = req.body;
    let games = [];
    if (name==='' && platform !==''){
        games = await Game.find({platform}).lean();
    } else if (name!=='' && platform===''){
        games = await Game.find({name}).lean();
    } else if (name==='' && platform==='') {
        games = await Game.find().lean();
    } else {
        games = await Game.find({name, platform}).lean();
    }

    res.render('search', {games});
}