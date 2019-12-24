import express from 'express';
import bodyParser from 'body-parser';
import morganImport from 'morgan'
import config from './config';
//import mySQL from '../backend/biblio/mySqlConnexion';
import routes from './routes/appRoutes'; 
import authRoutes from './routes/authRoutes';
import Database from './biblio/Database'
const app = express();

const dataBase = new Database(config.dataBase);

/*************
 * MiddleWare *
 **************/
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use(morganImport('dev'));


const data = express.Router();
const auth = express.Router();

routes(data, dataBase);
authRoutes(auth, dataBase);

console.log(config.rootAPI);

app.use(`${config.rootAPI}/data`,data);
app.use(`${config.rootAPI}/`,auth);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});

