import User from '../model/user/User';
import User_DAO from '../model/user/User_DAO';
import * as responseHandler from '../tools/responsesHandler';

class AuthController {


    /**
     * to register new user
     */
    static signup = (req, res) => {
      if (req?.user) {
        res.send(responseHandler.success('', { 
            ...req.user, 
            token: User.getTokenForUserId(req.user.id) 
          }));
      } else {
        res.send(responseHandler.error('user not found', {}));
      }
    }
    

    /**
     * to login an existing user
     * token is sended back, this tokken need to be use in authorization header
     * for jwt protected route
     */
    static signin = (req, res) => {
      const {email, password} = req.body;
      if (email && password) {
        const user_DAO = new User_DAO();        
        user_DAO.getUserByEmail_DAO_Promise(email)
        .then( (user) => {
          if (user?.getId()) {
            //if email of this new user is already taken
            res.status(200).send(responseHandler.error('this Email is already in use', {}));
          } else {
            const userTosave = new User(req.body).cryptPassword();
            
            user_DAO.saveUser_DAO_Promise(userTosave)
            .then( row => {
              if (row?.affectedRows === 1) {
                //if user is saved to database
                res.status(201).send(responseHandler.success(`user created`, {
                                token: User.getTokenForUserId(row.insertId), 
                                ...row
                              }));
              } else {
                res.status(500).send(responseHandler.error('something goes wrong with user inserted.', {row}));
              }              
            })            
            .catch( err => res.status(500).send(responseHandler.error('error during saveUser_DAO_Promise', {}, err)));
          }
        })
        .catch( err => res.send(responseHandler.error(err.message + '   ' + err.stack, {})));
      } else {
          res.send(responseHandler.error('no Email or name or password found', req.body));
      }
  }
    
}

module.exports = AuthController;
