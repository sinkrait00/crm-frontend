import { WRITE_PROVIDERS} from './types'
import {getTemplate} from "../../utils/helpers/getTemplate";
import {providerCreator, providerDeleter, providerGetter, providerUpdater} from "../../utils/api";
import {toggleLoader} from "./mainReducer";
import {createOrChangeTemplate} from "../../utils/helpers/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/helpers/deleteTemplate";

const initialState={
    providers: []
}


export const providerReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_PROVIDERS:
            return{
                ...state,
                providers: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const getProviders = ()=> {
    return async dispatch => getTemplate(dispatch, providerGetter, WRITE_PROVIDERS, toggleLoader)
}
export const createProvider = data=>{
    return async dispatch => createOrChangeTemplate(dispatch,providerCreator,data,toggleLoader)
}
export const deleteProvider = id =>{
    return async dispatch => deleteTemplate(dispatch,providerDeleter,id,toggleLoader)
}
export const updateProvider = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,providerUpdater,data,toggleLoader,id)
}

