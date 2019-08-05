import * as type from "./action-type";
import { getQueryString } from "@/utils/common";
import moment from "moment";

//迅速填充数据
const open = getQueryString("open") || "";

//设置页表单
const settingFormInitState = open.includes("1")
  ? {
      actName: { value: "1" },
      activityValidDate: { value: [moment(), moment().add(7, "days")] },
      marketScope: { value: "1000" },
      productCode: { value: [] },
      executeType: { value: "1" },
      planExecTime: { value: [] },
      channels: { value: "0" },
      abVersion: { value: "0" },
      scheme: { value: "2" },
      terminal: {
        value: window.localStorage.getItem("bizId") == "30" ? "SNXDGK" : "SNYG"
      },
      equipmentType: { value: ["1"] },
      activityCities: { value: [""] },
      tester: { value: [] },
      planCount: { value: "2" },
      activityTheme: { value: "10001" }
    }
  : {
      actName: { value: "" },
      activityValidDate: { value: [] },
      marketScope: { value: "1000" },
      productCode: { value: [] },
      executeType: { value: "0" },
      planExecTime: { value: [] },
      channels: { value: "0" },
      abVersion: { value: "0" },
      scheme: { value: "2" },
      terminal: {
        value: window.localStorage.getItem("bizId") == "30" ? "SNXDGK" : "SNYG"
      },
      equipmentType: { value: [] },
      activityCities: { value: [] },
      tester: { value: [] },
      planCount: { value: "2" },
      activityTheme: { value: "10001" }
    };

export const normalSettingState = (state = settingFormInitState, action) => {
  switch (action.type) {
    case type.NORMAL_SETTING:
      return { ...state, ...action.payload };
    case type.NORMAL_SETTING_RESET:
      return { ...settingFormInitState };
    default:
      return state;
  }
};

const channelFormInitState = [1, 2, 3].map((item, index) =>
  open.includes("2")
    ? {
        [`pushStyle${index}`]: {
          value: window.localStorage.getItem("bizId") == "30" ? "1" : "0"
        },
        [`pushTitle${index}`]: { value: "pushtitle" },
        [`pageType${index}`]: { value: "1001" },
        [`noticeType${index}`]: { value: "600" },
        [`title${index}`]: { value: "title" },
        [`pushSound${index}`]: { value: "empty" },
        [`content${index}`]: { value: "content" },
        [`pageId${index}`]: { value: "pagedId" },
        [`appStyle${index}`]: {
          value: window.localStorage.getItem("bizId") == "30" ? "3" : "5"
        }
      }
    : {
        [`pushStyle${index}`]: {
          value: window.localStorage.getItem("bizId") == "30" ? "1" : "0"
        },
        [`title${index}`]: { value: "" },
        [`content${index}`]: { value: "" },
        [`pageId${index}`]: { value: "" },
        [`appStyle${index}`]: {
          value: window.localStorage.getItem("bizId") == "30" ? "3" : "5"
        }
      }
);

export const normalChannelState = (
  state = {
    ...channelFormInitState[0],
    ...channelFormInitState[1],
    ...channelFormInitState[2]
  },
  action
) => {
  switch (action.type) {
    case type.NORMAL_CHANNEL:
      return { ...state, ...action.payload };
    case type.NORMAL_CHANNEL_RESET:
      return {
        ...channelFormInitState[0],
        ...channelFormInitState[1],
        ...channelFormInitState[2]
      };
    default:
      return state;
  }
};
