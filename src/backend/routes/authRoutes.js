import AuthController from '../controllers/AuthController';
import passport from 'passport';
import logRouter from '../tools/decorators';

require('../tools/passport');

const requireToken = passport.authenticate('jwt', { session: false});
const requireValidCredential = passport.authenticate('local', {session: false});

module.exports = (app) => {
  
  
  app.post('/signup', requireValidCredential, (req, res) => {
    AuthController.signup(req, res);
  })
  .post('/signin', (req, res) => {
    AuthController.signin(req, res);
  })
  .get('/testJwtTokken', requireToken, (req, res) => {
    res.send({test: 'test ok'});
  })
  .delete('/deleteUser',requireToken, (req, res) => {
    AuthController.deleteUser(req, res);
  });
};