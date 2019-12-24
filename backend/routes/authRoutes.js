import AuthController from '../controllers/AuthController'

module.exports = (app, dataBase) => {
  const authController = require('../controllers/AuthController');

    app.get('/signup', (req, res) => {
        console.log('signup');
        AuthController.signup(req, res, dataBase)
    })
    .get('/signin', (req, res) => {
      console.log('signin');
      AuthController.signin(req, res, dataBase)
    })
}