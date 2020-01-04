import React from 'react';
import LoginForm from '../../form/loginForm/LoginForm';
import { signinUser } from '../../actions/users';
import { connect } from 'react-redux';
import { Card } from 'antd';
import './users.css';

class LoginFormContainer extends React.Component {

    handleSubmit = (credentials, setError) => {
        this.props.signinUser(credentials, setError);
    }

    render() {
        return (
            <Card title="Login" style={{ 
                                        borderRadius: 8, 
                                        marginLeft: '6%', 
                                        top: 20
                                        }} className='card-login-form'>
                <LoginForm handleSubmitParent={this.handleSubmit}/>
            </Card>
        );
    }
}

const mapDispatchToProps = {
    signinUser
};
  
export default connect(null, mapDispatchToProps)(LoginFormContainer);
