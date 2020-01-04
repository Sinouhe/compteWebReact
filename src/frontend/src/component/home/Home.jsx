import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button  } from 'antd';
import './home.css';

class Navbar extends Component {
	
  render() {
    return (
        <div className='center-height-home-text'>
            <h1 className='center-widht-home-text'>Welcome to compte App</h1>
            <Button
              type="primary"
              icon="login"
            >
              <Link to="/login" style={{ color : 'white', marginLeft : '5px' }}>login</Link>
            </Button>
        </div>
    );
  }
}

export default Navbar;
