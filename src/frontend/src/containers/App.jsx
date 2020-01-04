import React, { Fragment } from 'react';
import LoginFormContainer from './users/LoginFormContainer';
import Logout from './users/Logout';
import { Route, Switch } from 'react-router-dom';
import Navbar from './menu/mainMenu/index';
import './menu/mainMenu/mainMenu.css';
import Home from '../component/home/Home';



class App extends React.Component {

  render() {
    console.log('render');
    return (
      <Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LoginFormContainer}/>
          <Route exact path="/login" component={Logout}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;