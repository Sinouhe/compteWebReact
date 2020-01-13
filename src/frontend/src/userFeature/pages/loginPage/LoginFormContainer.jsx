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
        this.props.signinUserAction(credentials, setError, this.props.history);
    }

    render() {
        return ( 
            <Card title="Login" style={{ 
                                        borderRadius: 8, 
                                        marginLeft: '6%', 
                                        top: 20
                                        }} className='card-login-form'>
                                            <div>salut</div>
                <LoginForm handleSubmitParent={this.handleSubmit}/>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
      isLoggedIn: state.users.isLoggedIn
    };
};

const mapDispatchToProps = {
    signinUserAction
};
  
const LoginFormContainerWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer));
const LoginFormContainerConnected = connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);

export {
    LoginFormContainerWithRouter,
    LoginFormContainerConnected,
    LoginFormContainer
};