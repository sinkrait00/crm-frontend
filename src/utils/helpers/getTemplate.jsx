export const getTemplate = async (dispatch,getFunc, actionType,toggleLoader)=>{
    dispatch(toggleLoader(true));
    let response = await getFunc();
    dispatch({type:actionType,payload: response})
    dispatch(toggleLoader(false))
}