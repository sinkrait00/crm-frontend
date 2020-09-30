import React, {useEffect} from 'react'
import CreateOrEditFilterForm from "./CreateOrEditFilterForm";
import Loader from "../Loader/Loader";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createUser} from "../../redux/reducers/usersReducer";
import {createTag, getTags} from "../../redux/reducers/tagReducer";



const CreateOrEditFilterContainer = (props)=>{

    const submitHandler = values=>{
       if(props.loadData===0) {
           props.createTag(values)
       }
        props.history.push('/filters')
    }

    let data
    if( props.loadData===1) {
       data = props.data.find(item => item.key === props.match.params.filter_id)
    }

    return(
         (data===undefined && props.loadData===1) ? <Loader /> :
        <CreateOrEditFilterForm
            {...props}
            submitHandler={submitHandler}
            data={data}
        />
    )
}

export default connect(null,{createTag})(withRouter(CreateOrEditFilterContainer))