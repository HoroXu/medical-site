import { SEARCH_REDVNVOLOPE_EVENTCODE } from '@/redux/actions';

export const createEventCode = (code) => {
    return{
        type:SEARCH_REDVNVOLOPE_EVENTCODE,
        payload:code
    }
}

const reduer = (state = '',action) => {
    switch(action.type){
        case SEARCH_REDVNVOLOPE_EVENTCODE:return action.payload
        default:return state
    }
}

export default reduer;