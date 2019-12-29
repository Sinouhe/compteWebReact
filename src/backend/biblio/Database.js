import mysql from 'mysql';
import config from '../config';

class Database {

    #connection = undefined;
    #poolConnection = undefined;


    constructor() {        
        return this;
    }

    closePoolConnection = () => {
        return new Promise( ( resolve, reject ) => {
            this.#poolConnection.end( err => {
                if ( err ) {
                    return reject( err );
                }                    
                resolve();
            } );
        } );
    };

    getPoolConnection = () => {
        return this.#poolConnection;
    };

    createPoolConnection = (numberOfMaxConnection) => {
        this.#poolConnection =  mysql.createPool({
                ConnectionLimit: config.numberOfMaxConnection, 
                ...config.dataBase
            });
        console.log(`pool connection to mysql created, ${numberOfMaxConnection} max connection opened.`)
        return this;
    };

    createConnection = () => {
        this.#connection = mysql.createConnection(config.dataBase);
        return this;
    };

    getConnection = () => {
        return this.#connection;
    };

    closeConnection_Pomise = () => {
        return new Promise( ( resolve, reject ) => {
            this.#connection.end( err => {
                if ( err ) {
                    return reject( err );
                }                    
                resolve();
            } );
        } );
    };

    //main method to launch query, all query pass by here, if we need to log something or what ever
    handleQuery = (connection, queryString, args, callback) => {
        return connection.query( queryString, args, callback);
    }   

}


module.exports = Database;