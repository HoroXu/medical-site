import {
  DELIVERY_SETTING_PLAN,
  DELIVERY_SETTING_RESOURCE,
  DELIVERY_SETTING_CUSTOMER,
  DELIVERY_SETTING_RESET,
  DELIVERY_SETTING_NOTICETIME,
} from "../actions/index";

import moment from "moment";
const initState = {
  customer: {
    guestGroupName: "",
    memLevel: "",
    customSee: "",
    memStatus: "",
    isDelCattle: "0",
    groupDel: "", 
    groupDelName: ""
  },
  plan: {
    selectedDate: [],
    tester: [],
    testerName: [],
    testerList: [],
    recallTime: 30
  },
  couponInfo: {
    key: "", //券密钥
    code: "", //券code
    name: "", //券名称
    type: 1 //券类型（1：领券 ,2：发券）
  },
  noticeTime:[],
};

export const resetSetting = () => {
  return{
    type:DELIVERY_SETTING_RESET
  }
}

export default function reducer(state = initState, action) {
  const { payload=[] } = action;
  switch (action.type) {
    case DELIVERY_SETTING_PLAN: {
      return {
        ...state,
        plan: {
          tester: payload.tester,
          selectedDate: payload.selectedDate,
          testerName: payload.testerName,
          testerList: payload.testerList,
          recallTime: payload.recallTime
        }
      };
    }
    case DELIVERY_SETTING_RESOURCE: {
      return {
        ...state,
        couponInfo: payload
      };
    }
    case DELIVERY_SETTING_CUSTOMER: {
      return {
        ...state,
        customer: payload
      };
    }
    case DELIVERY_SETTING_NOTICETIME:{
      return {
        ...state,
        noticeTime: payload
      }
    }
    case DELIVERY_SETTING_RESET:{
        return initState
    }
    default: {
      return state;
    }
  }
}
