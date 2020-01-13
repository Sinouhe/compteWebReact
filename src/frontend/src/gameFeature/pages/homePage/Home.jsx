import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button  } from 'antd';
import './home.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getListGames} from '../../actions/gamesActions';

const initialState = {
  listToShow: 'gamesListPs4'
};

class GamesHomePage extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount = () => {
    if (!this.props.gamesListPs4 && !this.props.gamesListSwitch) {
      this.props.getListGames();
    }
  }
  
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

  showList = () => {
    if(this.props.gamesListPS4 && this.state.listToShow === 'gamesListPs4') {
      return this.props.gamesListPS4.data.results.map((el, index) => {
        return (
          <div key={index}>{el.name}</div>
        );
      });
    }
  }


  render() {
    return (
      <Fragment>
        {this.showList()}
        <div className='center-height-home-text'>
            <h1 className='center-widht-home-text'>Welcome to compte App</h1>
            { this.butonLoginRender()}
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  getListGames
};
  

const mapStateToProps = state => {
  return {
    gamesListPS4: state.games.gamesListPS4,
    gamesListSwitch: state.games.gamesListSwitch
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GamesHomePage));
