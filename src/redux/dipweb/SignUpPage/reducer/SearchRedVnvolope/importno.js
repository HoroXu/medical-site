import { SEARCH_REDVNVOLOPE_IMPORTNO,SEARCH_REDVNVOLOPE_COUNTS } from '@/redux/actions';


export const createImportNo = (value) => {
    return{
        type:SEARCH_REDVNVOLOPE_IMPORTNO,
        payload:value
    }
}

const reducer = (state = '',action) => {
    switch(action.type){
        case SEARCH_REDVNVOLOPE_IMPORTNO:return action.payload
        default:return state
    }
}

export const createCounts = (counts) => {
    return{
        type:SEARCH_REDVNVOLOPE_COUNTS,
        payload:counts
    }
}

export const countReducer = (state = 0,action) => {
    switch(action.type){
        case SEARCH_REDVNVOLOPE_COUNTS:{
            return action.payload
        }
        default:{
            return state;
        }
    }
}

export default reducer;