import { SEARCH_REDVNVOLOPE_CHANNEL } from '@/redux/actions';

/*action函数*/
export const createChannelList = (value) =>{
    return{
        type: SEARCH_REDVNVOLOPE_CHANNEL,
        payload : value
    }
}

/*action*/
const reducer = (state = { styleIds : 1 } ,action) => {
    switch (action.type){
        case SEARCH_REDVNVOLOPE_CHANNEL:{
            return {
                ...action.payload
            }
        };
        default:{
            return state
        }
    }
}

export default reducer;