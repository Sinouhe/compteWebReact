import AuthController from '../controllers/AuthController';
import passport from 'passport';

require('../tools/passport');

const requireToken = passport.authenticate('jwt', { session: false});
const requireValidCredential = passport.authenticate('local', {session: false});

module.exports = (app) => {
  
  app.post('/signup', requireValidCredential, (req, res) => {
      console.log('signup controller');
      AuthController.signup(req, res);
  })
  .post('/signin', (req, res) => {
    console.log('signin controller');
    AuthController.signin(req, res);
  })
  .get('/testJwtTokken', requireToken, (req, res) => {
    res.send({test: 'test ok'});
  });
};