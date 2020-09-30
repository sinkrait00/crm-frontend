import React from 'react'
import CreateOrEditUserForm from "./CreateOrEditUserForm";
import Loader from "../Loader/Loader";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createUser} from "../../redux/reducers/usersReducer";



const CreateOrEditUserContainer = (props)=>{
    const submitHandler = values=>{
       if(props.loadData===0) {
           props.createUser(values)
       }
        props.history.push('/users')
    }

    let data
    if( props.loadData===1) {
        data = props.users.find(item => item.id === props.match.params.user_id)
    }
    return(
        data===undefined && props.loadData===1 ? <Loader /> :
        <CreateOrEditUserForm
            {...props}
            submitHandler={submitHandler}
            data={data}/>
    )
}

export default connect(null,{createUser})(withRouter(CreateOrEditUserContainer))