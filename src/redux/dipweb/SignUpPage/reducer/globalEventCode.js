import { GLOBAL_EVENT_CODE } from '../actions/index';

const initState = {
    event_code:''
}

export const resetCode = (code) => {
    return{
        type:GLOBAL_EVENT_CODE,
        payload:code
    }
}

export default function reducer(state = initState,action){
    switch(action.type){
        case GLOBAL_EVENT_CODE:{
            return {
                event_code:action.payload
            }
        }
        default:{
            return state;
        }
    }
}