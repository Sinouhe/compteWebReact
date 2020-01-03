
import React, { Fragment } from 'react';
import validate from './formLoginValidators';
import { Formik } from 'formik';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './formLogin.css';

const MyTextInput = ({ ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <Fragment>
            <Input className='login-form-element'
                {...field} {...props}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
            />
            {meta.touched && meta.error ? (
            <div className='login-form-error'>{meta.error}</div>
            ) : null}
        </Fragment>
    );
};

const MyPasswordInput = ({ ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <Fragment>
            <Input className='login-form-element'
                {...field} {...props}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
            />
            {meta.touched && meta.error ? (
            <div className='login-form-error'>{meta.error}</div>
            ) : null}
        </Fragment>
    );
};

const LoginForm = (props) => {
    return (
        <Fragment>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={validate}
                onSubmit={(values) => {
                    props.handleSubmitParent(
                        {
                            email: values.email,
                            password: values.password

                        }
                    );
                }}
                render={ ({
                        setValues,
                        values,
                        handleSubmit,
                        validateForm,
                        submitForm,
                        errors,
                        handleChange,
                        touched,
                        handleBlur
                    }) => {
                        console.log(touched);
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
                                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
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
                                    {errors.password && touched.password ? <div>{errors.password}</div> : null}
                                </Form.Item>         
                                <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                    Or <a href="">register now!</a>
                                </Form.Item>
                            </Form>
                        )
                    }
                }
                >
                {/*
                <Form className="login-form">
                    <MyTextInput
                    label='email'
                    name='email'
                    type='text'
                    placeholder='email'
                    />
                    <MyPasswordInput
                    label="password"
                    name="password"
                    type="text"
                    placeholder="password"
                    />
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form>
                */}
            </Formik>
        </Fragment>
    );
};

export default LoginForm;
  