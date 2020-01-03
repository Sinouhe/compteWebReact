import React, { Fragment } from 'react';
import LoginForm from '../form/loginForm/LoginForm';
import { signinUser } from '../actions/users';
import { connect } from 'react-redux';

class LoginFormContainer extends React.Component {

    handleSubmit = (credentials) => {
        this.props.signinUser(credentials);
    }

    render() {
        return (
            <Fragment>
                <LoginForm handleSubmitParent={this.handleSubmit}/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = {
    signinUser
};
  
export default connect(null, mapDispatchToProps)(LoginFormContainer);
