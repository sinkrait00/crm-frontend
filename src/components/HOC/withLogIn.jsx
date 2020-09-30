import React, {useEffect} from 'react'
import {authChecker} from "../Auth/authChecker";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {toggleAuth} from "../../redux/reducers/mainReducer";
import {roleChecker} from "../Auth/roleChecker";
import {logout} from "../Auth/logout";


const withLogIn = Component =>{
    return props =>{
        useEffect(()=>{
            if(authChecker()){
                props.toggleAuth({isAuth: true,role: roleChecker()})
            }else{
                props.history.push('/')
                props.toggleAuth({})
                logout()
            }
        },[props.isAuth])
        return(
             <Component {...props}/>
        )
    }
}

export default withLogIn