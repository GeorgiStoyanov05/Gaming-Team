const jwt = require('jsonwebtoken');

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = jwt.verify(token, 'verySecret');

            req.user = decodedToken;
            req.isAuthenticated = true;
            
            res.locals.username = decodedToken.username;
            res.locals.isAuthenticated = true;
        } catch(err) {
            console.log(err.message);

            res.clearCookie('auth');
            res.redirect('/404');
        }
    }

    next();
};

exports.isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated) {
        return res.redirect('/login');
    }

    next();
}