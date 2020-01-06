  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinOutAction } from '../../actions/users';
import { withRouter } from 'react-router-dom';

class Logout extends Component {

    componentDidMount() {
        this.props.signinOutAction();
    }


    render() {
        return (
            <div>
                Au revoir !
            </div>
        );
    }
}


const mapDispatchToProps = {
    signinOutAction
};
  
export default withRouter(connect(null, mapDispatchToProps)(Logout));