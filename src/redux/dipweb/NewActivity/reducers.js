import * as type from "./action-type";
import { getQueryString } from "@/utils/common";
import moment from "moment";

//迅速填充数据
const open = getQueryString("open") || "";

//步骤
export const step = (state = { index: 0 }, action) => {
  switch (action.type) {
    case type.STEP:
      return { index: action.payload };
    default:
      return state;
  }
};

const scenesInitState = ["SZ001", "SZ001-T001-J001"];

//设置页表单
const settingFormInitState = open.includes("1")
  ? {
      actCustFlag: { value: 0 },
      containGroup: { value: [] },
      actName: { value: "" },
      activityValidDate: { value: [moment(), moment().add(7, "days")] },
      scenes: { value: scenesInitState },
      marketScope: { value: "1000" },
      planExecTime: { value: [] },
      executeType: { value: "1" },
      isDuplicate: { value: "1" },
      isPromotion: { value: "0" },
      cupSendType: { value: "1" },
      remScalper: { value: "1" },
      channels: { value: { all: [], order: [] } },
      productCode: { value: [] },
      abVersion: { value: "0" },
      groupA: { value: 50 },
      groupB: { value: 50 },
      coupons: { value: [] },
      tester: { value: [] }
    }
  : {
      actCustFlag: { value: 0 },
      containGroup: { value: [] },
      actName: { value: "" },
      activityValidDate: { value: [] },
      scenes: { value: scenesInitState },
      marketScope: { value: "1000" },
      planExecTime: { value: [] },
      executeType: { value: "0" },
      isDuplicate: { value: "1" },
      isPromotion: { value: "1" },
      cupSendType: { value: "1" },
      remScalper: { value: "1" },
      channels: { value: { all: [], order: [] } },
      productCode: { value: [] },
      abVersion: { value: "0" },
      groupA: { value: 50 },
      groupB: { value: 50 },
      coupons: { value: [] },
      tester: { value: [] }
    };

export const settingState = (state = settingFormInitState, action) => {
  // console.log(action, "settingFormInitState===========");
  switch (action.type) {
    case type.SETTING:
      return { ...state, ...action.payload };
    case type.CUSTOMER:
      return { ...state, containGroup: action.payload };
    case type.SETTING_RESET:
      return { ...settingFormInitState, channels: { all: [], order: [] } };
    default:
      return state;
  }
};

//渠道页

const channelInitState = {
  pushTerminalType: {
    value: "SNYG"
  },
  pushStyle: {
    value: "0"
  },
  title: { value: "" },
  content: { value: "" },
  pageId: { value: "" },
  messageTerminal: {
    value: "SNYG"
  },
  appStyle: {
    value: "5"
  },
  mmsTitle: { value: "" },
  mmsTemplate: { value: "14" },
  couponResource: { value: [] },
  voucherType: { value: "00" },
  passWordPageType: { value: "1" },
  sendType: { value: "0" }
};

export const channelState = (state = channelInitState, action) => {
  switch (action.type) {
    case type.CHANNEL:
      return { ...state, ...action.payload };
    case type.CHANNEL_RESET:
      return channelInitState;
    default:
      return state;
  }
};

export const actCode = (state = "", action) => {
  switch (action.type) {
    case type.ACTCODE:
      return action.payload;
    case type.CHANNEL_RESET:
      return channelInitState;
    default:
      return state;
  }
};

export const actCustFlag = (state = 0, action) => {
  switch (action.type) {
    case type.ACT_CUST_FLAG:
      return { ...state, ...action.actCustFlag };
    default:
      return state;
  }
};

export const selectCityRegion = (state = [], action) => {
  switch (action.type) {
    case type.SELECT_CITY_REGION:
      console.log(action.selectCityRegion, "reducer======选择城市大区======");
      return [...action.selectCityRegion];
    default:
      return state;
  }
};
