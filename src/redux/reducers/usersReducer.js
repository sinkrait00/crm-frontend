import {WRITE_USERS, WRITE_USERS_ROLES} from './types'
import {getTemplate} from "../../utils/helpers/getTemplate";
import {userCreator, userDeleter, usersGetter, usersRoleGetter} from "../../utils/api";
import {toggleLoader} from "./mainReducer";
import {createOrChangeTemplate} from "../../utils/helpers/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/helpers/deleteTemplate";

const initialState={
    users: [],
    roles: []
}


export const usersReducer = (state=initialState, action)=>{
    switch (action.type) {
        case WRITE_USERS:
            return{
                ...state,
                users: action.payload
            }
        case WRITE_USERS_ROLES:
            return{
                ...state,
               roles: action.payload
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
export const createUser = data=>{
    return async dispatch =>createOrChangeTemplate(dispatch,userCreator,data,toggleLoader)
}
export const deleteUser = id =>{
    return async dispatch => deleteTemplate(dispatch,userDeleter,id,toggleLoader)
}

export const getRoles = ()=> async dispatch=>getTemplate(dispatch,usersRoleGetter,WRITE_USERS_ROLES,toggleLoader)

