import passport from 'passport';
import User_DAO from '../model/user/User_DAO';
import config from '../config';
import Jwt from 'passport-jwt';
import localStrategy from 'passport-local'; 

const ExtractJwt = Jwt.ExtractJwt;
const JwtStrategy = Jwt.Strategy; 

const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    console.log(payload.sub);
    if(!payload?.sub) {
        return done(null, false);
    }
    const userId = payload.sub;
    const user_DAO = new User_DAO();
    
    user_DAO.userFindById_DAO_Promise(userId)
        .then( (user) => {
            if(user?.getId() && user?.getId() === payload.sub){
                return done(null, user);
            } else {
                return done(null, false);
            }
            
        })
        .catch((err) => {
            return done(err, false);
        });
});

const localOptions = {usernameField : 'email'};

const localLoginStrategy = new localStrategy(localOptions, (email, password, done) => {
    console.log('email');
    console.log(email);
    console.log(password);
    if(!email || !password) {
        console.log(`email or password empty. email: ${email}, password: ${!password ? 'empty' : 'not empty'}`);
        return done(null, false);
    }
    const user_DAO = new User_DAO();
    
    user_DAO.getUserByEmail_DAO_Promise(email)
    .then( async (user) => {
        if(!user) {
            return done(null, false);
        }
        const isEqualPass = await user.isPasswordEqualToSync(password);
        if(isEqualPass) {
            return done(null, user);
        }
        return done(null, false);        
    })
    .catch((err) => {
        return done(err);
    });
});

passport.use(jwtLogin);
passport.use(localLoginStrategy);