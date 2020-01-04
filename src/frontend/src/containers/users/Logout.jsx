  
import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import * as actions from '../../actions/users';

class Logout extends Component {

    componentWillMount() {
        //this.props.signoutUser()
    }

    render() {
        return (
            <div>
                Au revoir !
            </div>
        );
    }
}


//export default connect(null, actions)(Signout);
export default Logout;