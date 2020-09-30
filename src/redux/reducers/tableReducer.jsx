import { TOGGLE_MODAL} from './types'

const initialState={
    modalWindow: {} //{isOpen:false,type:'DELETE',data:{ 'typeRow,''id'}}
}


export const tableReducer = (state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_MODAL:
            return{
                ...state,
                modalWindow: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const toggleModal = obj=>{
    return{
        type:  TOGGLE_MODAL,
        payload: obj
    }
}

