import User from '../model/User';
import * as biblio from '../biblio/function';

class AuthController {

    static signup = (req, res, dataBase) => {
        const email = req.body.email;
        if (email) {   
          
          //no promised
          /*
          User._getUserByEmail(dataBase, 'email', (err, user) => {
            if (err)        
                res.send(biblio.error(err.message, {}));
            
            res.send(biblio.success('', user));
          }); 
          */

          //promised
          User._getUserByEmail_Promise(dataBase, email)
          .then( rows => res.send(biblio.success('', rows)))
          .catch( err => res.send(biblio.error(err.message, {})));
        } else {
            res.send(biblio.error('no Email found', {}));
        }
    }
    
    static signin = (req, res, dataBase) => {
      const {email, nom} = req.body;
      if (email && nom) {
        User._getUserByEmail_Promise(dataBase, email)
        .then( rows => {
          if (rows.length > 0) {
            res.status(422).send(biblio.error('this Email is already in use', {}))
          } else {
            const user = new User({email, nom})
            user.saveUser_Promise(dataBase)
            .then(() => console.log('user saved'))
            .catch((err) => console.log(err));
          }
        })
        .catch( err => res.send(biblio.error(err.message + '   ' + err.stack, {})));
      } else {
          res.send(biblio.error('no Email or name found', {}));
      }
      
  }
    
}

module.exports = AuthController;
