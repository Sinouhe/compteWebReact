import AbstractSuperClass from '../AbstractSuperClass';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'jwt-simple';
import config from '../../config';
import {cryptMdpSync} from '../../biblio/function';



class User extends AbstractSuperClass {
    
    #passwordSaltRound = 10;

    #id = undefined;
    #nom;
    #prenom;
    #email;
    #password;

    constructor({nom, prenom, email, password} = {}) {
        super();
        nom ? this.#nom = nom : this.#nom = '';
        prenom ? this.#prenom = prenom : this.#prenom = '';
        email ? this.#email = email : this.#email = '';
        password ? this.#password = password : this.#password = '';
        return this;
    }

    setId = (id) => {
        this.#id = id;
        return this;
    }

    setNom = (nom) => {
        this.#nom = nom;
        return this;
    }

    setPrenom = (prenom) => {
        this.#prenom = prenom;
        return this;
    }

    setEmail = (email) => {
        this.#email = email;
        return this;
    }

    setPassword = (password) => {
        this.#password = password;
        return this;
    }

    setPasswordSaltRound = (passwordSaltRound) => {
        this.#passwordSaltRound = passwordSaltRound;
        return this;
    }

    getNom = () => {
        return this.#nom;
    }

    getPrenom = () => {
        return this.#prenom;
    }

    getEmail = () => {
        return this.#email;
    }

    getPassword = () => {
        return this.#password;
    }

    getPasswordSaltRound = () => {
        return this.#passwordSaltRound;
    }

    getId = () => {
        return this.#id;
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
            class: 'User',
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
