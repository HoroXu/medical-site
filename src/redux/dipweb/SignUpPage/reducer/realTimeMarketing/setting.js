import { REAL_TIME_MARKETING_SETTING,REAL_TIME_MARKETING_SETTING_RESET } from "@/redux/actions";
import moment from "moment";



const initState = {
    memLevel:{
        value:[]
    },
    memberStatus:{
        value:[]
    },
    isDelCattle:{
        value:false
    },
    groupDel:{
        value:{
            tagId:'',
            tagName:'',
            // tagBeginDate:'',
            // tagEndDate:'',
        }
    },
    repetitionDel:{
        value:false,
    },
    selectTemplate:{
        value:{}
    },
    appTitle:{
        value:'',
    },
    appContent:{
        value:'',
    },
    activityDate:{
        value:[],
    },
    noticeTime:{
        value:[]
    },
    recallTime:{
        value: 30,
    },
    tester:{
        value:[]
    },
    buyRate:{
        value:0,
    },
    buyProbsClone:{
        value:0,
    },
    priceSeg:{
        value:[]
    },
    removeDays:{
        value:[]
    },
    removeTime:{
        value:false
    },
}
function reducer(state = initState,action){
    switch (action.type) {
        case REAL_TIME_MARKETING_SETTING:
            return{
                ...state,
                ...action.payload
            }
        case REAL_TIME_MARKETING_SETTING_RESET:return initState        
        default:return state
    }
}

export default reducer;