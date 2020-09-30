import React, {useEffect} from 'react'
import AuthForm from "./AuthForm";

import './Auth.css'
import {connect} from "react-redux";
import {signInAction, toggleAuth} from "../../redux/reducers/mainReducer";
import {Redirect, withRouter} from "react-router-dom";
import withPreloader from "../HOC/withPreloader";
import {compose} from "redux";

const AuthFormContainer: React.FunctionComponent = (props)=>{

    const handlerSubmit = data=>{
        props.signInAction(data)
    }
    return(
        props.isAuth ? <Redirect to='/main'/>:
        <div className="authContainer">
            <h2>Вход</h2>
            <AuthForm
                handlerSubmit={handlerSubmit}
                loader={props.loader}
            />
        </div>

    )
}
const mapStateToProps = state=>{
    return{
        isAuth: state.main.isAuthorized.isAuth,
        loader: state.main.isFetchLoader
    }
}
const enhance = compose(
    withPreloader,
    connect(mapStateToProps,{signInAction,toggleAuth}),
    withRouter,

)
export default enhance(AuthFormContainer)