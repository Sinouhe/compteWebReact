import User_DAO from './User_DAO';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'jwt-simple';
import config from '../config'



class User extends User_DAO {
    
    #passwordSaltRound = 10;

    id = undefined;

    constructor({nom, email, password} = {}) {
        super();
        nom ? this.nom = nom : this.nom = '';
        email ? this.email = email : this.email = '';
        password ? this.password = password : this.password = '';
    }

    _getUserByEmail_Promise = (email) => {
        return this._getUserByEmail_DAO_Promise(email);
    }

    saveUser_Promise = () => {
        this.password = this.cryptMdpSync(this.password);
        return this.saveUser_DAO_Promise();
    }

    cryptMdpSync = (password) => {     
        const salt = bcrypt.genSaltSync(this.passwordSaltRound);
        return bcrypt.hashSync(password, salt);
    }

    userFindById_Promise = (id) => {
        return this.userFindById_DAO_Promise(id)
    }

    static getTokenForUserId = (id) => {
        const timeStamp = new Date().getTime();
        return jwt.encode(
            {
                sub: id,
                iat: timeStamp
            },
            config.secret
        );
    }

    objectToJson() {
        return {
            nom: this.nom,
            email: this.email,
            password: this.password
        }
    }

    isPasswordEqualToSync = async (externalPass) => {
        return bcrypt.compareSync(externalPass, this.password);
    }    

}

module.exports = User;
