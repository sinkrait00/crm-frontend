import { WRITE_EMPLOYEES} from './types'
import {getTemplate} from "../../utils/helpers/getTemplate";
import {employeeGetter} from "../../utils/api";
import {toggleLoader} from "./mainReducer";

const initialState={
    employees: [
    //     {
    //     key: '',
    //     full_name: '',
    //     role: '',
    //     position: '',
    //     email: '',
    //     phone: ''
    // }
    ]
}


export const employeeReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_EMPLOYEES:
            return{
                ...state,
                employees: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const getEmployees = ()=> {
    return async dispatch => getTemplate(dispatch, employeeGetter, WRITE_EMPLOYEES, toggleLoader)
}

