import React, { Fragment } from 'react';
import { LoginFormContainerWithRouter } from './userFeature/pages/loginPage/LoginFormContainer';
import RegisterFromContainer from './userFeature/pages/RegisterPage/RegisterFormContainer';
import Logout from './userFeature/pages/logoutPage/Logout';
import { Route, Switch } from 'react-router-dom';
import Navbar from './commons/mainMenu/index';
import './commons/mainMenu/mainMenu.css';
import GamesHomePage from './gameFeature/pages/homePage/Home';
import { connect } from 'react-redux';
import { setAuthentificationAction } from './userFeature/actions/users';
import './app.css';



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
          <Route exact path="/" component={GamesHomePage}/>
          <Route exact path="/login" component={LoginFormContainerWithRouter}/>
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