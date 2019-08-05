import { combineReducers } from "redux";
import steps from "./steps";
import setting from './setting';
import eventcode from "./eventcode";
import num from './num';

const reducer = combineReducers({
    steps,
    setting,
    eventcode,
    num,
})

export default reducer;