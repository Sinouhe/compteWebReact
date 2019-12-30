import bcrypt from 'bcrypt-nodejs';

exports.cryptMdpSync = (password, saltRound) => {     
    const salt = bcrypt.genSaltSync(saltRound);
    return bcrypt.hashSync(password, salt);
};