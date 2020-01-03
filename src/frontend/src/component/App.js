import React, { Fragment } from 'react';
import LoginFormContainer from '../containers/LoginFormContainer';
import Logout from '../containers/Logout';
import { Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    console.log('render');
    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">About</Link>
            </li>
            <li>
              <Link to="/logout">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={LoginFormContainer}/>
          <Route exact path="/login" component={LoginFormContainer}/>
          <Route exact path="/logout" component={Logout}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;