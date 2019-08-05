import { combineReducers } from "redux";
import searchSteps from './searchRedVnvolope';
import settingStatus from './setting';
import searchStatus from './search';
import selectHotWords from './selecthotWordsList';
import importNoStatus, { countReducer as count }from './importno';
import channels from './channelStyle';
import eventCode from './eventcode';

export default combineReducers({
    searchSteps,
    settingStatus,
    searchStatus,
    selectHotWords,
    importNoStatus,
    channels,
    eventCode,
    count,
})