import { REAL_TIME_MARKETING_EVENTCODE } from "@/redux/actions";

const reducer = (state='',action) => {
    switch (action.type) {
        case REAL_TIME_MARKETING_EVENTCODE:
            return action.payload
        default:
            return state;
    }
}

export default reducer;