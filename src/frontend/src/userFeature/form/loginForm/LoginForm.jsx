
import React, { Fragment } from 'react';
import validate from './formLoginValidators';
import { Formik } from 'formik';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './formLogin.css';

class LoginForm extends React.Component {


    render() {
        return (
            <Fragment>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    
                    validate={validate}
                    onSubmit={(values, {setErrors}) => {
                        this.props.handleSubmitParent(
                            {
                                email: values.email,
                                password: values.password

                            },
                            setErrors
                        );
                    }}
                    render={ ({
                            //setValues,
                            values,
                            handleSubmit,
                            //validateForm,
                            //submitForm,
                            errors,
                            handleChange,
                            touched,
                            handleBlur
                        }) => {
                            return (
                                <Form onSubmit={handleSubmit} className="login-form">
                                    <Form.Item>
                                        <Input
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="email"
                                        />     
                                        {errors.email && touched.email ? <div style={{color: 'red'}}>*{errors.email}</div> : null}
                                    </Form.Item>    
                                    <Form.Item>
                                        <Input
                                        id='password'
                                        name='password'                                    
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}                                    
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Password"
                                        />     
                                        {errors.password && touched.password ? <div style={{color: 'red'}}>*{errors.password}</div> : null}
                                    </Form.Item>         
                                    <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    { errors.errorsLogin && <div style={{color: 'red'}}>*{errors.errorsLogin}</div> }
                                    Or <a href="">register now!</a>
                                    </Form.Item>
                                </Form>
                            );
                        }
                    }
                    >
                </Formik>
            </Fragment>
        );
    }
}

  
export default LoginForm;
