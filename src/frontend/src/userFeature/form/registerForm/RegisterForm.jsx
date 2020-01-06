
import React, { Fragment } from 'react';
import validate from './registerFormValidators';
import { Formik } from 'formik';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './RegisterForm.css';

class RegisterForm extends React.Component {


    render() {
        return (
            <Fragment>
                <Formik
                    initialValues={{
                        nom: '',
                        prenom: '',
                        email: '',
                        password: '',
                        password2: ''
                    }}
                    
                    validate={validate}
                    onSubmit={(values, {setErrors}) => {
                        this.props.handleSubmitParent(
                            {
                                nom: values.nom, 
                                prenom: values.prenom,
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
                                        id="nom"
                                        name="nom"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nom}
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="nom"
                                        />     
                                        {errors.nom && touched.nom ? <div style={{color: 'red'}}>*{errors.nom}</div> : null}
                                    </Form.Item>
                                    <Form.Item>
                                        <Input
                                        id="prenom"
                                        name="prenom"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.prenom}
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="prenom"
                                        />     
                                        {errors.prenom && touched.prenom ? <div style={{color: 'red'}}>*{errors.prenom}</div> : null}
                                    </Form.Item>
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
                                        type='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}                                    
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='Password'
                                        />     
                                        {errors.password && touched.password ? <div style={{color: 'red'}}>*{errors.password}</div> : null}
                                    </Form.Item>
                                    <Form.Item>
                                        <Input
                                        id='password2'
                                        name='password2'                                    
                                        type='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password2}                                    
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Password confirmation"
                                        />     
                                        {errors.password2 && touched.password2 ? <div style={{color: 'red'}}>*{errors.password2}</div> : null}
                                    </Form.Item>         
                                    <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        register
                                    </Button>
                                    { errors.errorsRegister && <div style={{color: 'red'}}>*{errors.errorsRegister}</div> }
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
  
export default RegisterForm;
