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

process.on('close', function() {
    console.log('About to close');
});

import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import authRoutes from './routes/authRoutes';
import Database from './tools/Database';

const helmet = require('helmet'),
    app = express(),
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

if (process.env.NODE_ENV === config.modeDev) {
    console.log(`middleWare mode ${config.modeDev} loading`);
    const morgan = require('morgan');
    app.use(morgan('dev'));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });
    
}

/***********
 * Routing *
 ***********/

const auth = express.Router();
authRoutes(auth);
app.use(`${config.rootAPI}/`,auth);

/****************/

app.listen(config.port, () => {
    console.log(`root api: ${config.rootAPI}`);
    console.log(`mode: ${process.env.NODE_ENV}`);
    console.log(`listening on port: ${config.port}`);
});


