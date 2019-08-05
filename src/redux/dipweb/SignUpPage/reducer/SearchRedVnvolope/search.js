import { SEARCH_REDVNVOLOPE_SEARCH,SEARCH_REDVNVOLOPE_SEARCH_RESET } from '@/redux/actions';
import { goodsCategory } from '@/config/codeMap';
import moment from 'moment';


export const createSearch = (value) => {
    return{
        type:SEARCH_REDVNVOLOPE_SEARCH,
        payload:value
    }
}

export const resetSearch = () => {
    return{
        type:SEARCH_REDVNVOLOPE_SEARCH_RESET
    }
}

const initState = {
    activityInitiator:goodsCategory[0].value,
    activityType:[ moment().subtract(7, "day"),moment().subtract(1,'day')]
}

const reducer = (state = initState,action) => {
    switch(action.type){
        case SEARCH_REDVNVOLOPE_SEARCH:{
            return{
                ...state,
                ...action.payload,
            }
        }
        case SEARCH_REDVNVOLOPE_SEARCH_RESET:{return initState}
        default:return state;
    }
}

export default reducer;