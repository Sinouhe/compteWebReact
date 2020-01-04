import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RightMenu extends Component {

  registerToShow = () => {
    if (this.props.isLoggedIn) {
      return (
        <Menu.Item key='app'>
          <Link to="/register">register</Link>
        </Menu.Item>
      );
    }
    return null;  
  }

  render() {
    return (
			<Menu mode='horizontal'>
        <Menu.Item key='mail'>
          { this.props.isLoggedIn ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link> }
        </Menu.Item>
        {this.registerToShow()}
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.users.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  null
)(RightMenu);

