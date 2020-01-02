
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { signinUser } from '../actions/users';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './formLogin.css';
import { Form, Icon, Input, Button } from 'antd';

const FIELDS = {
    email: 'email', 
    password: 'password'
};

class LoginForm extends React.Component {
    
  handleSubmit = (credentials) => {
    this.props.signinUser(credentials);
  };

  renderInputComponent = field => {
    return (
      <Input
        {...field.input} type={field.type}
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Username"
      />
    );
  };

  renderInputPasswordComponent = field => {
    return (
      <Input
        {...field.input} type={field.type}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Password"
      />
    );
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="login-form">
        <Form.Item>
          <Field
            name={FIELDS.email}
            type='text'            
            component={this.renderInputComponent}            
          />         
        </Form.Item>    
        <Form.Item>
          <Field
            name={FIELDS.password}
            type='password'
            component={this.renderInputPasswordComponent}                        
          />         
        </Form.Item>         
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const loginForm = reduxForm({
  form: 'logForm',
  fields: Object.keys(FIELDS),
})(LoginForm);

const mapDispatchToProps = {
  signinUser
};

export default connect(null, mapDispatchToProps)(loginForm);
