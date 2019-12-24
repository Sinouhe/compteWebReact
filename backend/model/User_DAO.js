const _SELECT = "USER_id, \
                USER_Nom, \
                USER_email";

class User_DAO {
    
    static _getUserByEmail_DAO = (dataBase, email, result) => {
        let queryString = "SELECT _SELECT \
                    FROM users \
                    WHERE USER_email = ? ".replace('_SELECT', _SELECT);

        
        dataBase.connection.query( queryString, [email], (err, res) => {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);        
            }
        });  
    }; 

    static _getUserByEmail_DAO_Promise = (dataBase, email) => {
        let queryString = "SELECT _SELECT \
                    FROM users \
                    WHERE USER_email = ? ".replace('_SELECT', _SELECT);
        
        return dataBase.queryPromised(queryString, email);          
    };
    
    saveUser_DAO_Promise = (dataBase) => {
        let queryString = `INSERT INTO users (USER_Nom, USER_Email) values ('${this.nom}', '${this.email}')`
        return dataBase.queryPromised(queryString);
    };   
    

}

module.exports = User_DAO;