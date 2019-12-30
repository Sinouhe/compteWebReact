/**
 * Globally listen to unhandled promises rejections.
 */
process.on('unhandledRejection', (event) => {
	console.error(`WARNING: Unhandled promise rejection. Reason: \n${event.reason}`);
	console.error(event);
});
/**
 * Globally listen to unhandled exceptions.
 */
process.on('uncaughtException', (err) => {
	console.error(`WARNING: Uncaught exception. Reason: \n${err.message}\n${err.stack}`);
});



import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import authRoutes from './routes/authRoutes';
import Database from './biblio/Database';
const helmet = require('helmet');

const app = express(),
    compression = require('compression');

/*****************************************************
 * Database connection, pass to global for DAO class *
 ****************************************************/
const dataBase = new Database().createPoolConnection(config.dataBaseConnectionLimit);
global.database = dataBase;

/**************
 * MiddleWare *
 **************/
app.use(compression());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
    console.log('middleWare dev loading');
    const morgan = require('morgan');
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });
    app.use(morgan('dev'));
}


const auth = express.Router();

authRoutes(auth);

console.log(config.rootAPI);
console.log(process.env.NODE_ENV);

app.use(`${config.rootAPI}/`,auth);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});

