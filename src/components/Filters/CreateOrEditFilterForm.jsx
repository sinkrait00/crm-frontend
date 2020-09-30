import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {lockSVG, mailSVG,nameSVG,phoneSVG,positionSVG,roleSVG} from "../../assets/icons";
import './CreateOrEditFilterForm.css'
import {Multiselect} from "multiselect-react-dropdown";

const CreateOrEditFilterForm = (props)=>{
    let initialVals={
        title: '',
      }
   if(props.loadData===1){
       initialVals={
           title: props.data.title,
           }
   }
    return(
        <div className='createOrEditUserForm'>
            <h2>{props.title}</h2>

        <Formik
            initialValues={initialVals}
            validationSchema={Yup.object({
                title: Yup.string(),


        })}
            onSubmit={(values => props.submitHandler(values))}
            >
        <Form>
            <div className='divider'>
            <div className="authInput">
                <img src={nameSVG} alt=""/>
                <Field name="title" placeholder="Название фильтра"/>
                <span  className='authError'><ErrorMessage name="title"/></span>
            </div>


            </div>
            {/*<div className='divider'>*/}
            {/*<div className="authInput">*/}
            {/*    <img src={positionSVG} alt=""/>*/}
            {/*    <Field  name="main_filter"*/}
            {/*            render={({field,form: { setFieldValue}})=>{*/}
            {/*                const style ={*/}
            {/*                    multiselectContainer: {*/}
            {/*                        width: '100%',*/}
            {/*                        margin: '5px 0'*/}
            {/*                    },*/}
            {/*                    searchBox: { // To change search box element look*/}
            {/*                        border: 'none',*/}
            {/*                        padding: '0'*/}
            {/*                    },*/}
            {/*                    inputField: { // To change input field position or margin*/}
            {/*                        background: '#F8F9FB',*/}
            {/*                        margin: '0',*/}
            {/*                        width: '100%',*/}
            {/*                        height: '100%'*/}

            {/*                    },*/}
            {/*                    chips: { // To change css chips(Selected options)*/}
            {/*                        background: '#F8F9FB',*/}
            {/*                        color:'#212121'*/}
            {/*                    },*/}
            {/*                    optionContainer: {*/}
            {/*                        borderRadius:'none' // To change css for option container*/}
            {/*                    },*/}
            {/*                    option: { // To change css for dropdown options*/}
            {/*                        color:'#000'*/}
            {/*                    },*/}

            {/*                    groupHeading: { // To chanage group heading style*/}

            {/*                    }*/}
            {/*                }*/}

            {/*                return(*/}
            {/*                    <Multiselect*/}
            {/*                        options={field.value}*/}
            {/*                        onSelect = {(selectedList,selectedItem)=>setFieldValue(selectedItem)}*/}
            {/*                        displayValue = {"title"}*/}
            {/*                        placeholder="Главный фильтр"*/}
            {/*                        style={style}*/}
            {/*                        closeIcon={'cancel'}*/}
            {/*                    />*/}
            {/*                )*/}
            {/*            }}*/}
            {/*    />*/}
            {/*    <span  className='authError'><ErrorMessage name="main_filter"/></span>*/}
            {/*</div>*/}
            {/*</div>*/}
            <button type='submit'>Сохранить</button>
        </Form>
        </Formik>
        </div>
    )
}
export default CreateOrEditFilterForm