import React from 'react'
import AuthForm from "./AuthForm";

import './Auth.css'
const AuthFormContainer: React.FunctionComponent = ()=>{
    return(
        <div className="authContainer">
            <h2>Вход</h2>
            <AuthForm />
        </div>

    )
}

export default AuthFormContainer