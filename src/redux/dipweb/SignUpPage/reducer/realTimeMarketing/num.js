import { REAL_TIME_MARKETING_NUM } from "@/redux/actions";

const reducer = (state = {visitorNum:0,buyerNum:0,counts:0},action) => {
    switch (action.type) {
        case REAL_TIME_MARKETING_NUM:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default reducer;