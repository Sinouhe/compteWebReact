import React from 'react';
import RegisterFrom from '../../form/registerForm/RegisterForm';
import { registerUser } from '../../actions/users';
import { connect } from 'react-redux';
import { Card } from 'antd';
import './users.css';
import { withRouter } from 'react-router-dom';

class RegisterForm extends React.Component {

    componentDidMount = () => {
        if(this.props.isLoggedIn === true) {
            this.props.history.push('/');
        }
    }

    handleSubmit = (values, setError) => {
        console.log(values);
        this.props.registerUser(values, setError, this.props.history);
    }

    render() {
        return (
            <Card title="Login" style={{ 
                                        borderRadius: 8, 
                                        marginLeft: '6%', 
                                        top: 20
                                        }} className='card-login-form'>
                <RegisterFrom handleSubmitParent={this.handleSubmit}/>
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
    registerUser
};
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
