import bcrypt from 'bcrypt-nodejs';

exports.success = (message, data) => {
    return {
        status: 'success',
        result: data,
        message: message
    }
};

exports.error = (message, data) => {
    return {
        status: 'error',
        result: data,
        message: message
    }
};

exports.logeur = (data) => {
    console.log(data);
};

exports.isErr = (err) => {
    return err instanceof Error;
};

exports.checkAndChange = (obj) => {
    if (this.isErr(obj)) {
        return this.error(obj.message);
    } else {
        return this.success(obj);
    }
};

exports.cryptMdpSync = (password, saltRound) => {     
    const salt = bcrypt.genSaltSync(saltRound);
    return bcrypt.hashSync(password, salt);
}

