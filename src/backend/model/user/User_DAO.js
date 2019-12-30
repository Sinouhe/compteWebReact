import User from './User';
import AbstractSuperClassDAO from '../AbstractSuperClassDAO';

const allColumnsSelect = [
    'USER_id', 
    'USER_nom',
    'USER_prenom', 
    'USER_email',
    'USER_password'
];

const allColumnsInsert = [
    'USER_nom',
    'USER_prenom', 
    'USER_email',
    'USER_password'
];

const tableName =  'users';

/**
 * all method user class regarding database logic
 */

class User_DAO extends AbstractSuperClassDAO {

    constructor(database = undefined){
        super(database);
    }   

    #loadUserFromRow = (row, user) => {
        user.setId(row[0].USER_id);
        user.setNom(row[0].USER_nom);
        user.setPrenom(row[0].USER_prenom);
        user.setEmail(row[0].USER_email);
        user.setPassword(row[0].USER_password);
    }

    getUserByEmail_DAO_Promise = (email) => {
        let user = undefined;
        let queryString = `SELECT ?? 
                            FROM ?? 
                            WHERE USER_email = ?;`;
        return new Promise(( resolve, reject ) => {
            return this.getDatabase().handleQuery(this.getDatabase().getPoolConnection(), 
                                            queryString, 
                                            [allColumnsSelect, tableName, email], 
                                            ( err, row ) => {
                if ( err ) {
                    return reject( err );
                }                  
                
                if(row.length > 0 ) {
                    user = new User();
                    this.#loadUserFromRow(row, user);
                }                   
                  
                resolve(user);
            });
        }); 
    };


    userFindById_DAO_Promise = (id) => {
        let user = undefined;
        let queryString = `SELECT ??
                    FROM ?? 
                    WHERE USER_id = ?;`;

        return new Promise( ( resolve, reject ) => {
            return this.getDatabase().handleQuery(this.getDatabase().getPoolConnection(), 
                                            queryString, 
                                            [allColumnsSelect, tableName, id], 
                                            ( err, row ) => {
                if ( err ) {
                    return reject( err );
                }                       

                if(row.length > 0 ) {
                    user = new User();
                    this.#loadUserFromRow(row, user);
                }                   
                
                resolve(user);
            });
        }); 
    };

    
    saveUser_DAO_Promise = (user) => {
        let queryString = `INSERT INTO ?? (??)
                            values(?, ?, ?, ?)`;

        return new Promise( ( resolve, reject ) => {
            return this.getDatabase().handleQuery(this.getDatabase().getPoolConnection(), 
                                            queryString, 
                                            [
                                                tableName,
                                                allColumnsInsert, 
                                                user.getNom(), 
                                                user.getPrenom(), 
                                                user.getEmail(), 
                                                user.getPassword()
                                            ], 
                                            ( err, row ) => {
                if ( err ) {
                    return reject( err );
                }                    

                resolve(row);
            });
        });
    }
    
    

}

module.exports = User_DAO;