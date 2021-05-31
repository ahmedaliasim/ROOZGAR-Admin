const initState = {
    data:[],
    loading:true,
    profile: {
        employeeName: '',
        profileImage: ''
    }
}

export const reducer = (state = initState,action)=>{
    if(action.type=="ADD_DATA"){
         return {
             ...state,
             data:action.payload
         }
    }
    if(action.type=="SET_LOADING"){
        return {
            ...state,
            loading:action.payload
        }
    }
    if (action.type=="STORE_EMPLOYEE_DATA"){
            return {
                ...state,
                profile: action.payload
            }
        }
    return state
}