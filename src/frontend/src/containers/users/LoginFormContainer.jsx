import React from 'react';
import LoginForm from '../../form/loginForm/LoginForm';
import { signinUserAction } from '../../actions/users';
import { connect } from 'react-redux';
import { Card } from 'antd';
import './users.css';
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
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer));
