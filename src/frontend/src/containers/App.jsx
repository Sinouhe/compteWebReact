import React, { Fragment } from 'react';
import LoginFormContainer from './users/LoginFormContainer';
import RegisterFromContainer from './users/RegisterFormContainer';
import Logout from './users/Logout';
import { Route, Switch } from 'react-router-dom';
import Navbar from './menu/mainMenu/index';
import './menu/mainMenu/mainMenu.css';
import Home from './home/Home';
import { connect } from 'react-redux';
import { setAuthentificationAction } from '../actions/users';



class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('tokenBackenAuthent')  && this.props.isLoggedIn === false) {
      this.props.setAuthentificationAction(true);
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LoginFormContainer}/>
          <Route exact path="/logout" component={Logout}/>
          <Route exact path="/register" component={RegisterFromContainer}/>          
        </Switch>
      </Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.users.isLoggedIn
  };
};

const mapDispatchToProps = {
  setAuthentificationAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);