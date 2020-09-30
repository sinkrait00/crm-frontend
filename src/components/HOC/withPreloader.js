import React, {Component, useEffect, useState} from 'react'
import {togglePageLoader} from "../../redux/reducers/mainReducer";
import {connect} from "react-redux";
import Loader from "../Loader/Loader";


const withPreloader = Component =>{

    return props =>{
        let [loader,setLoader] = useState(true);
        useEffect(()=>{
                setTimeout(()=>setLoader(false),1000)
        },[])
        return(
           loader? <Loader /> :
            <Component {...props} />
        )
    }
}

export default withPreloader