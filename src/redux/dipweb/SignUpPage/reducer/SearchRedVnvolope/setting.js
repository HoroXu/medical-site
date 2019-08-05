import { SEARCH_REDVNVOLOPE_SETTING,
        SEARCH_REDVNVOLOPE_SETTING_RESET } from '@/redux/actions';

export const createSettingAction = (value) => {
    return {
        type:SEARCH_REDVNVOLOPE_SETTING,
        payload:value
    }
}

export const resetSetting = () => {
    return{
        type:SEARCH_REDVNVOLOPE_SETTING_RESET
    }
}

const initState = {
    marketingScene:{
        value:'00'
    }
}

const reducers = (state = initState,action) => {
    switch(action.type){
        case SEARCH_REDVNVOLOPE_SETTING:{
            return{
                ...state,
                ...action.payload
            }
        }
        case SEARCH_REDVNVOLOPE_SETTING_RESET:{
            return initState
        }
        default:return state
    }
}

export default reducers;