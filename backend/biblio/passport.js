import passport from 'passport';
import User from '../model/User';
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
    const userId = payload.sub;
    const user = new User();
    const connection = global.database.createConnection();
    //return done(null, {});
    
    user.userFindById_Promise( userId)
        .then( () => {
            if(user?.id){
                return done(null, user);
            } else {
                return done(null, false);
            }
            
        })
        .catch((err) => {
            return done(err, false);
        })
        .finally(() => {
            connection.closeConnection_Pomise()
                .then(() => console.log('passport close the mySQL connection'))
                .catch((err) => console.log('error during passport closing connection'))
        })
});

const localOptions = {usernameField : 'email'};

const localLoginStrategy = new localStrategy(localOptions, (email, password, done) => {
    const user = new User();
    const connection = global.database.createConnection();
    user._getUserByEmail_Promise(email)
    .then( async () => {
        try{
            if(user) {
                const isEqualPass = await user.isPasswordEqualToSync(password);
                console.log({isEqualPass})
                if(isEqualPass)
                    return done(null, user);
            }
            return done(null, false);
        } 
        catch(err) {
            throw err;
        }
    })
    .catch((err) => {
        return done(err);
    })
    .finally(() => {
        connection.closeConnection_Pomise()
            .then(() => console.log('passport close the mySQL connection'))
            .catch((err) => console.log('error during passport closing connection'))
    })
})

passport.use(jwtLogin);
passport.use(localLoginStrategy);