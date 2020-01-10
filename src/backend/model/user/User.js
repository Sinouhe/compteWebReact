import AbstractSuperClass from '../AbstractSuperClass';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'jwt-simple';
import config from '../../config';
import {cryptMdpSync} from '../../tools/utils';

/**
 * all method user class regarding business logic
 */

class User extends AbstractSuperClass {
    
    #passwordSaltRound = 10;

    #USER_id = undefined;
    #USER_nom;
    #USER_prenom;
    #USER_email;
    #USER_password;

    constructor(userTocreate = {}) {
        super();
        this.#USER_id = userTocreate.USER_id;
        this.#USER_nom = userTocreate.USER_nom;
        this.#USER_prenom = userTocreate.USER_prenom;
        this.#USER_email = userTocreate.USER_email;
        this.#USER_password = userTocreate.USER_password;
        return this;
    }

    setId = (id) => {
        this.#USER_id = id;
        return this;
    }

    setNom = (nom) => {
        this.#USER_nom = nom;
        return this;
    }

    setPrenom = (prenom) => {
        this.#USER_prenom = prenom;
        return this;
    }

    setEmail = (email) => {
        this.#USER_email = email;
        return this;
    }

    setPassword = (password) => {
        this.#USER_password = password;
        return this;
    }

    setPasswordSaltRound = (passwordSaltRound) => {
        this.#passwordSaltRound = passwordSaltRound;
        return this;
    }

    getNom = () => {
        return this.#USER_nom;
    }

    getPrenom = () => {
        return this.#USER_prenom;
    }

    getEmail = () => {
        return this.#USER_email;
    }

    getPassword = () => {
        return this.#USER_password;
    }

    getPasswordSaltRound = () => {
        return this.#passwordSaltRound;
    }

    getId = () => {
        return this.#USER_id;
    }

    cryptPassword = () => {
        this.setPassword(cryptMdpSync(this.getPassword(), this.getPasswordSaltRound()));
        return this;
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
            class: this.constructor.name,
            id: this.getId(),
            nom: this.getNom(),
            prenom: this.getPrenom(),
            email: this.getEmail(),
            password: this.getPassword()
        };
    }

    isPasswordEqualToSync = async (externalPass) => {
        return bcrypt.compareSync(externalPass, this.getPassword());
    }    

}

module.exports = User;
