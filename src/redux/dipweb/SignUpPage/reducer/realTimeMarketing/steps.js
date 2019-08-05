import { REAL_TIME_MARKETING_CURRENT_STEP } from "@/redux/actions";

const initState = 0;

function reducer(state = initState,action) {
    switch (action.type) {
        case REAL_TIME_MARKETING_CURRENT_STEP:return action.payload
        default:
            return state;
    }
}

export default reducer;