import { TOGGLE_FETCH_LOADER} from './types'

const initialState={
    isFetchLoader: false
}


export const mainReducer = (state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_FETCH_LOADER:
            return{
                ...state,
                isFetchLoader: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const toggleLoader = value=>{
    return{
        type: 'TOGGLE_FETCH_LOADER',
        payload: value
    }
}


