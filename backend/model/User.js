import User_DAO from './User_DAO';

class User extends User_DAO {
    
    id = null;
    nom = '';
    email = '';

    constructor({nom, email}) {
        super();
        this.nom = nom;
        this.email = email;
    }

    static _getUserByEmail = (dataBase, email, result) => {
        return this._getUserByEmail_DAO(dataBase, email, result);
    }

    static _getUserByEmail_Promise = (dataBase, email) => {
        return this._getUserByEmail_DAO_Promise(dataBase, email);
    }

    saveUser_Promise = (dataBase) => {
        return this.saveUser_DAO_Promise(dataBase);
    }

}

module.exports = User;
