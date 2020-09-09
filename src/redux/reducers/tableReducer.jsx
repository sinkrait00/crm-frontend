import {WRITE_SEARCH_TEXT} from './types'

const initialState={
    searchText:''
}


export const tableReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_SEARCH_TEXT:
            return{
                ...state,
                searchText: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const writeInSearchText = value=>{
    return{
        type: 'WRITE_SEARCH_TEXT',
        payload: value
    }
}

