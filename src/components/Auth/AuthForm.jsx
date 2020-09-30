import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {lockSVG, mailSVG,authArrow} from '../../assets/icons'
import Loader from "../Loader/Loader";

const AuthForm: React.FunctionComponent = (props)=>{
    return(
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .required('Введите email')
                    .email('Невалидный email'),
                password: Yup.string()
                    .required('Введите пароль')
            })}
            onSubmit={values=>props.handlerSubmit(values)}
>
<Form>
<div className="authInput">
    <img src={mailSVG} alt=""/>
    <Field name="email" placeholder="E-mail"/>
   <span  className='authError'><ErrorMessage name="email"/></span>
</div>
    <div className="authInput">
        <img src={lockSVG} alt=""/>
        <Field name="password" placeholder="Пароль"/>
        <span  className='authError'><ErrorMessage name="password" /></span>
    </div>
    {props.loader? <Loader />:<button className="authBtn" type="submit"><img src={authArrow} alt=""/><span>Войти</span></button>}
</Form>
        </Formik>
    )
}

export default AuthForm