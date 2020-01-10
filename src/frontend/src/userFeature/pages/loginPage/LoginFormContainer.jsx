import React from 'react';
import LoginForm from '../../form/loginForm/LoginForm';
import { signinUserAction } from '../../actions/users';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { withRouter } from 'react-router-dom';

class LoginFormContainer extends React.Component {

    componentDidMount = () => {
        if(this.props.isLoggedIn === true) {
            this.props.history.push('/');
        }
    }

    handleSubmit = (credentials, setError) => {
        console.log('handle submit');
        this.props.signinUserAction(credentials, setError, this.props.history);
    }

    render() {
        //to test decorators
        //this.add(1, 2);
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

const mapStateToProps = state => {
    return {
      isLoggedIn: state.users.isLoggedIn
    };
};

const mapDispatchToProps = {
    signinUserAction
};
  
const LoginFormContainerWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer));
const LoginFormContainerTest = connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);

export {
    LoginFormContainerWithRouter,
    LoginFormContainerTest
}