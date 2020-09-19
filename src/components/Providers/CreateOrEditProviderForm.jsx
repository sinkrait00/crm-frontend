import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {
    clockSVG,
    companySVG,
    mailSVG,
    phoneSVG,
    positionSVG,
    locationSVG,
    userSVG,
    productSVG,
    webSVG, warehouseSVG, descriptionSVG
} from "../../assets/icons";
import './CreateOrEditProviderForm.css'

const CreateOrEditProviderForm = (props)=>{
    let initialVals={
        company: '',
        manager: '',
        warehouse: '',
        email: '',
        phone: '',
        office: '',
        favour: false,
        work_time: '',
        site: '',
        description: '',
        release_condition: ''
        }
    // if(props.data?.length===0){
    //     title="Добавление пользователя"
    //     initialVals={ name: '',
    //         email: '',
    //         phone: '',
    //         position: '',
    //         permission: '',
    //         password: ''}
    // }else{
    //     title="Редактирование пользователя"
    //
    // }
    return(
        <div className='createOrEditUserForm'>
            <h2>{props.title}</h2>

        <Formik
            initialValues={initialVals}
            validationSchema={Yup.object({
                company: Yup.string()
                .required('Введите название компании'),

                manager: Yup.string().required('Введите имя менеджера'),
                warehouse: Yup.string().required('Склад, адрес склада'),
                phone: Yup.string(),
                role: Yup.string()
                    .required('Введите роль'),
                email: Yup.string()
                .required('Введите email')
                .email('Невалидный email'),
                office: Yup.string(),
                favour: Yup.string(),
                work_time: Yup.string(),
                site: Yup.string(),
                description: Yup.string(),
                release_condition: Yup.string()

        })}
            >
        <Form>
            <div className='divider'>
            <div className="authInput">
                <img src={companySVG} alt=""/>
                <Field name="company" placeholder="Компания"/>
                <span  className='authError'><ErrorMessage name="company"/></span>
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


            <div className="authInput">
                <img src={userSVG} alt=""/>
                <Field name="manager" placeholder="Менеджер"/>
                <span  className='authError'><ErrorMessage name="manager"/></span>
            </div>
            <div className="authInput">
                <img src={warehouseSVG} alt=""/>
                <Field name="warehouse" placeholder="Адрес склада"/>
                <span  className='authError'><ErrorMessage name="warehouse"/></span>
            </div>
            </div>
            <div className='divider'>
                <div className="authInput">
                    <img src={locationSVG} alt=""/>
                    <Field name="office" placeholder="Адрес офиса"/>
                    <span  className='authError'><ErrorMessage name="officer"/></span>
                </div>
                <div className="authInput">
                    <img src={clockSVG} alt=""/>
                    <Field name="work_time" placeholder="Время работы"/>
                    <span  className='authError'><ErrorMessage name="work_time"/></span>
                </div>
                <div className="authInput">
                    <img src={webSVG} alt=""/>
                    <Field name="site" placeholder="Веб-сайт" />
                    <span  className='authError'><ErrorMessage name="site"/></span>
                </div>
                <div className="authInput">
                    <img src={descriptionSVG} alt=""/>
                    <Field component='textarea' name="description" placeholder="Описание"/>
                    <span  className='authError'><ErrorMessage name="description"/></span>
                </div>
                <div className="authInput">
                    <img src={productSVG} alt=""/>
                    <Field component='textarea' name="release_condition" placeholder="Условие отпуска товара"/>
                    <span  className='authError'><ErrorMessage name="release_condition"/></span>
                </div>
            </div>
            <button type='submit'>Сохранить</button>
        </Form>
        </Formik>
        </div>
    )
}
export default CreateOrEditProviderForm