import mysql from 'mysql';
import config from '../config';

class Database {

    connection = undefined;
    poolConnection = undefined;


    constructor() {        
        return this;
    };

    closePoolConnection = () => {
        return new Promise( ( resolve, reject ) => {
            this.poolConnection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    };

    getPoolConnection = () => {
        return this.poolConnection;
    };

    createPoolConnection = () => {
        this.poolConnection =  mysql.createPool({
                ConnectionLimit: config.dataBaseConnectionLimit, 
                ...config.dataBase
            });
        return this;
    };

    createConnection = () => {
        this.connection = mysql.createConnection(config.dataBase)
        return this;
    };

    getConnection = () => {
        return this.connection;
    };

    closeConnection_Pomise = () => {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    };

    handleQuery = (connection, queryString, args, callback) => {
        return connection.query( queryString, args, callback);
    }   

}


module.exports = Database;