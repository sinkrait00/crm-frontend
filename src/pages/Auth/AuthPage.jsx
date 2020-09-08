import React from 'react'
import AuthFormContainer from "../../components/Auth/AuthFormContainer";

import './AuthPage.css'

const AuthPage : React.FunctionComponent = ()=>{
    return(
        <div className="authPage">
            <div className="container">
                <AuthFormContainer />
            </div>
        </div>



    )
}

export default AuthPage