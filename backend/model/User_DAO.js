import AbstractSuperClass from './AbstractSuperClass'

const _SELECT = "USER_id, \
USER_nom, \
USER_email, \
USER_password";

class User_DAO extends AbstractSuperClass{

    constructor(database = global.database){
        super();
        this.database = database;
    }

    _getUserByEmail_DAO_Promise = (email) => {
        let queryString = `SELECT ${_SELECT} \
                    FROM users \
                    WHERE USER_email = ${this.toStringDatabase(email)}`;
        return new Promise(( resolve, reject ) => {
            return this.database.handleQuery(this.database.getPoolConnection(), 
                                            queryString, 
                                            [], 
                                            ( err, rows ) => {
                if ( err )
                    return reject( err );
                if(rows.length > 0 ){
                    this.id = rows[0].USER_id;
                    this.nom = rows[0].USER_nom;
                    this.email = rows[0].USER_email;
                    this.password = rows[0].USER_password;
                }        
                resolve();
            });
        }); 
    };


    userFindById_DAO_Promise = (id) => {
        let queryString = `SELECT ${_SELECT} \
                    FROM users \
                    WHERE USER_id = ${id}`;

        return new Promise( ( resolve, reject ) => {
            return this.database.handleQuery(this.database.getPoolConnection(), 
                                            queryString, 
                                            [], 
                                            ( err, rows ) => {
                if ( err )
                    return reject( err );
                    console.log(rows);
                this.id = rows[0].USER_id;
                this.nom = rows[0].USER_nom;
                this.email = rows[0].USER_email;
                this.password = rows[0].USER_password;
                resolve();
            });
        }); 
    };

    
    saveUser_DAO_Promise = () => {
        let queryString = `INSERT INTO users ( \
                                USER_nom, \
                                USER_email, \
                                USER_password) \
                            values( \
                                ${this.toStringDatabase(this.nom)}, \
                                ${this.toStringDatabase(this.email)}, \
                                ${this.toStringDatabase(this.password)})`

        return new Promise( ( resolve, reject ) => {
            return this.database.handleQuery(this.database.getPoolConnection(), 
                                            queryString, 
                                            [], 
                                            ( err, rows ) => {
                if ( err )
                    return reject( err );                
                resolve(rows);
            });
        });
    }
    
    

}

module.exports = User_DAO;