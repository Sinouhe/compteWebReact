  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinOut } from '../../actions/users';
import { withRouter } from 'react-router-dom';

class Logout extends Component {

    componentDidMount() {
        this.props.signinOut();
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
    signinOut
};
  
export default withRouter(connect(null, mapDispatchToProps)(Logout));