import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button  } from 'antd';
import './home.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  
  butonLoginRender = () => {
    if (!this.props.isLoggedIn) {
      return (
        <Button
        type="primary"
        icon="login"
        >
          <Link to="/login" style={{ color : 'white', marginLeft : '5px' }}>login</Link>
        </Button>
      );
    }
    return <Fragment/>;
  }

  render() {
    return (
        <div className='center-height-home-text'>
            <h1 className='center-widht-home-text'>Welcome to compte App</h1>
            { this.butonLoginRender()}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.users.isLoggedIn
  };
};

export default withRouter(connect(mapStateToProps, null)(Home));
