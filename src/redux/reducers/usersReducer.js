import { WRITE_USERS} from './types'
import {getTemplate} from "../../utils/helpers/getTemplate";
import {usersGetter} from "../../utils/api";
import {toggleLoader} from "./mainReducer";

const initialState={
    users: []
}


export const usersReducer = (state=initialState, action)=>{
    switch (action.type) {
        case WRITE_USERS:
            return{
                ...state,
                users: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const getUsers = ()=> {
    return async dispatch => getTemplate(dispatch, usersGetter, WRITE_USERS, toggleLoader)
}

