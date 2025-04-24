const router = require('express').Router();
const {isAuthenticated} = require('./middlewares/authMiddleware')

const homeController = require('./controllers/homeController');
const gameController = require('./controllers/gameController');
const userController = require('./controllers/userController');

router.get('/', homeController.getHomePage)
router.get('/catalog', homeController.getCatalogPage);

router.get('/create', gameController.getCreatePage);
router.post('/create', gameController.postCreatePage);
router.get('/details/:id', gameController.getDetailsPage);
router.get('/edit/:id', gameController.getEditPage);
router.post('/edit/:id', gameController.postEditPage);
router.get('/delete/:id', gameController.getDelete);
router.get('/buy/:id', gameController.getBuyGame);
router.get('/search', gameController.getSearchPage);
router.post('/search', gameController.postSearchPage);

router.get('/login', userController.getLoginPage);
router.post('/login', userController.postLoginPage);
router.get('/register', userController.getRegisterPage);
router.post('/register', userController.postRegisterPage);
router.get('/logout', userController.getLogout);

router.get('*', (req, res)=>{
    res.render('404');
})


module.exports = router;