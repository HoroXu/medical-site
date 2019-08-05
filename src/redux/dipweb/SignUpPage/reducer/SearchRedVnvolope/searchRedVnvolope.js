import {    SEARCH_REDVNVOLOPE_NEXT_STEPS,
            SEARCH_REDVNVOLOPE_PRE_STEPS,
            SEARCH_REDVNVOLOPE_STEP_RESET    }from '@/redux/actions';

export const nextSteps = () => {
    return{
        type:SEARCH_REDVNVOLOPE_NEXT_STEPS,
    }
}

export const preSteps = () => {
    return{
        type:SEARCH_REDVNVOLOPE_PRE_STEPS
    }
}

export const resetStep = () => {
    return{
        type:SEARCH_REDVNVOLOPE_STEP_RESET
    }
}

const initState = 0;

const searchSteps = (state = initState,action) => {
    switch(action.type){
        case SEARCH_REDVNVOLOPE_NEXT_STEPS:{
            return state < 3 ? state + 1:state
        }
        case SEARCH_REDVNVOLOPE_PRE_STEPS:{
            return state > 0 ? state -1:state
        }
        case SEARCH_REDVNVOLOPE_STEP_RESET:{return initState}
        default:{
            return state
        }
    }
}

export default searchSteps;

