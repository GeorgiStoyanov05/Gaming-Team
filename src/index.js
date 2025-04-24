const express = require('express');
const cookieParser = require('cookie-parser');

const authMiddleware = require('./middlewares/authMiddleware');const setupViewEngine = require('./config/setupViewEngine');
const initDatabase = require('./config/initDatabse');
const routes = require('./routes')


const app = express();
setupViewEngine(app);

app.use(express.static('src'));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(authMiddleware.authentication);
app.use(routes);

initDatabase()
.then(()=>app.listen(3000, ()=>console.log("Server is running on port 3000...")))
.catch(err=>console.log(err.message))