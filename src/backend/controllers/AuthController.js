import User from '../model/user/User';
import User_DAO from '../model/user/User_DAO'
import * as biblio from '../biblio/function';

class AuthController {

    static signup = (req, res) => {
      if (req?.user) {
        res.send(biblio.success('', { 
            ...req.user.objectToJson(), 
            token: User.getTokenForUserId(req.user.id) 
          }));
      } else {
        res.send(biblio.error('user not found', {}));
      }
    }
    
    static signin = (req, res) => {
      const {email, password} = req.body;
      if (email && password) {
        const user_DAO = new User_DAO();
        user_DAO.getUserByEmail_DAO_Promise(email)
        .then( (user) => {
          if (user?.getId()) {
            //if email of this new user is already taken
            res.status(422).send(biblio.error('this Email is already in use', {}))
          } else {
            const userTosave = new User(req.body).cryptPassword();
            
            user_DAO.saveUser_DAO_Promise(userTosave)
            .then( row => {
              if (row?.affectedRows === 1) {
                //if user is saved to database
                res.status(201).send(biblio.success(`user created`, {
                                token: User.getTokenForUserId(row.insertId), 
                                ...row
                              }));
              } else {
                res.status(500).send(biblio.error('something goes wrong with user inserted.', {row}));
              }              
            })            
            .catch( err => res.send(biblio.error(err.stack, {})));
          }
        })
        .catch( err => res.send(biblio.error(err.message + '   ' + err.stack, {})));
      } else {
          res.send(biblio.error('no Email or name or password found', req.body));
      }
      
  }
    
}

module.exports = AuthController;
