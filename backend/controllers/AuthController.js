import User from '../model/User';
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
      const {email, nom, password} = req.body;
      if (email && nom && password) {
        const user = new User(req.body);
        user._getUserByEmail_Promise(email)
        .then( () => {
          if (user?.id) {
            res.status(422).send(biblio.error('this Email is already in use', {}))
          } else {
            user.saveUser_Promise()
            .then( rows => {
              if (rows?.affectedRows === 1) {
                res.status(201).send(biblio.success(`user created`, {
                                token: User.getTokenForUserId(rows.insertId), 
                                ...rows
                              }));
              } else {
                res.status(500).send(biblio.error('something goes wrong with user inserted.', {rows}));
              }              
            })            
            .catch( err => res.send(biblio.error(err.message, {})));
          }
        })
        .catch( err => res.send(biblio.error(err.message + '   ' + err.stack, {})));
      } else {
          res.send(biblio.error('no Email or name or password found', req.body));
      }
      
  }
    
}

module.exports = AuthController;
