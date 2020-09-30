import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {lockSVG, mailSVG,nameSVG,phoneSVG,positionSVG,roleSVG} from "../../assets/icons";
import './CreateOrEditUserForm.css'

const CreateOrEditUserForm = (props)=>{
    let initialVals={
        full_name: '',
        email: '',
        phone: '',
        position: '',
        role: '',
        password: ''}
   if(props.loadData===1){
       initialVals={
           full_name: props.data.full_name,
           email: props.data.email,
           phone: props.data.phone,
           position: props.data.position,
           role: props.data.role,
           password: ''}
   }
    return(
        <div className='createOrEditUserForm'>
            <h2>{props.title}</h2>

        <Formik
            initialValues={initialVals}
            validationSchema={Yup.object({
                full_name: Yup.string()
                .required('Введите имя пользователя'),

            phone: Yup.string(),
            position: Yup.string(),
                role: Yup.string()
                    .required('Введите роль'),
            email: Yup.string()
                .required('Введите email')
                .email('Невалидный email'),
            password: Yup.string()
                .required('Введите пароль')
        })}
            onSubmit={(values => props.submitHandler(values))}
            >
        <Form>
            <div className='divider'>
            <div className="authInput">
                <img src={nameSVG} alt=""/>
                <Field name="full_name" placeholder="ФИО"/>
                <span  className='authError'><ErrorMessage name="full_name"/></span>
            </div>
            <div className="authInput">
                <img src={mailSVG} alt=""/>
                <Field name="email" placeholder="E-mail"/>
                <span  className='authError'><ErrorMessage name="email"/></span>
            </div>
            <div className="authInput">
                <img src={phoneSVG} alt=""/>
                <Field name="phone" placeholder="Телефон"/>
                <span  className='authError'><ErrorMessage name="phone"/></span>
            </div>
            </div>
            <div className='divider'>
            <div className="authInput">
                <img src={positionSVG} alt=""/>
                <Field name="position" placeholder="Должность"/>
                <span  className='authError'><ErrorMessage name="position"/></span>
            </div>
            <div className="authInput">
                <img src={roleSVG} alt=""/>
                <Field name="role" placeholder="Роль" as={'select'}>
                    <option value=""  hidden>
                        Выбор роли
                    </option>
                    {props.roles.map(item=> {

                        return (
                            <option key={item} value={item}>{item}</option>
                        )})
                    }
                </Field>
                <span  className='authError'><ErrorMessage name="role"/></span>
            </div>
            <div className="authInput">
                <img src={lockSVG} alt=""/>
                <Field name="password" placeholder="Пароль"/>
                <span  className='authError'><ErrorMessage name="password" /></span>
            </div>
            </div>
            <button type='submit'>Сохранить</button>
        </Form>
        </Formik>
        </div>
    )
}
export default CreateOrEditUserForm