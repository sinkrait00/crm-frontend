import { WRITE_PROVIDERS} from './types'
import {getTemplate} from "../../utils/helpers/getTemplate";
import {providerGetter} from "../../utils/api";
import {toggleLoader} from "./mainReducer";

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

