import { CORE_SHOPPING_LINE_STATE } from '../actions';

const initState = {
    coreShoppingLineState:{}
}

export default function reducer(state = initState, action){
    switch(action.type){
        case CORE_SHOPPING_LINE_STATE:{
            return {
                coreShoppingLineState:action.payload
            }
        }
        default:{
            return state
        }
    }
}

