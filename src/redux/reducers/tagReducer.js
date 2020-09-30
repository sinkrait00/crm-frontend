import { WRITE_TAGS} from './types'
import {getTemplate} from "../../utils/helpers/getTemplate";
import {tagsCreator, tagsDeleter, tagsGetter} from "../../utils/api";
import {toggleLoader} from "./mainReducer";
import {createOrChangeTemplate} from "../../utils/helpers/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/helpers/deleteTemplate";


const initialState={
    tags: []
}


export const tagReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_TAGS:
            return{
                ...state,
                tags: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const getTags = ()=> {
    return async dispatch => getTemplate(dispatch, tagsGetter, WRITE_TAGS, toggleLoader)
}
export const createTag = data=>{
    return async dispatch =>createOrChangeTemplate(dispatch,tagsCreator,data,toggleLoader)
}
export const deleteTag = id =>{
    return async dispatch=>deleteTemplate(dispatch,tagsDeleter,id,toggleLoader)
}


