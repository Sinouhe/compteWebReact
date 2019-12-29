import User from './User';
import AbstractSuperClassDAO from '../AbstractSuperClassDAO';

const _SELECT = 'USER_id, \
USER_nom, \
USER_prenom, \
USER_email, \
USER_password';

class User_DAO extends AbstractSuperClassDAO {

    constructor(database = global.database){
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
        let queryString = `SELECT ${_SELECT} \
                    FROM users \
                    WHERE USER_email = ${this.toStringDatabase(email)}`;
        return new Promise(( resolve, reject ) => {
            return this.getDatabase().handleQuery(this.getDatabase().getPoolConnection(), 
                                            queryString, 
                                            [], 
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
        let queryString = `SELECT ${_SELECT} \
                    FROM users \
                    WHERE USER_id = ${id}`;

        return new Promise( ( resolve, reject ) => {
            return this.getDatabase().handleQuery(this.getDatabase().getPoolConnection(), 
                                            queryString, 
                                            [], 
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
        let queryString = `INSERT INTO users ( \
                                USER_nom, \
                                USER_Prenom, \
                                USER_email, \
                                USER_password) \
                            values( \
                                ${this.toStringDatabase(user.getNom())}, \
                                ${this.toStringDatabase(user.getPrenom())}, \
                                ${this.toStringDatabase(user.getEmail())}, \
                                ${this.toStringDatabase(user.getPassword())})`;

        return new Promise( ( resolve, reject ) => {
            return this.getDatabase().handleQuery(this.getDatabase().getPoolConnection(), 
                                            queryString, 
                                            [], 
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