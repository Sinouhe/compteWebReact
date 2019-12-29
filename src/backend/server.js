import express from 'express';
import bodyParser from 'body-parser';
import morganImport from 'morgan';
import config from './config';
import authRoutes from './routes/authRoutes';
import Database from './biblio/Database'

const app = express();

/*****************************************************
 * Database connection, pass to global for DAO class *
 ****************************************************/
const dataBase = new Database().createPoolConnection(config.dataBaseConnectionLimit);
global.database = dataBase;

/**************
 * MiddleWare *
 **************/
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(morganImport('dev'));

const auth = express.Router();

authRoutes(auth);

console.log(config.rootAPI);

app.use(`${config.rootAPI}/`,auth);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});

