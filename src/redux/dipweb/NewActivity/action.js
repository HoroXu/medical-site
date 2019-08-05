import * as type from "./action-type";
import { listAddkey } from "@/utils/listAddkey";

export const stepCreator = index => {
  return {
    type: type.STEP,
    payload: index
  };
};

export const settingCreator = value => {
  return {
    type: type.SETTING,
    payload: value
  };
};

export const settingReset = () => {
  return {
    type: type.SETTING_RESET
  };
};

export const channelCreator = value => {
  return {
    type: type.CHANNEL,
    payload: value
  };
};

export const channelReset = () => {
  return {
    type: type.CHANNEL_RESET
  };
};

export const modifyCustomer = value => {
  return {
    type: type.CUSTOMER,
    payload: value
  };
};

export const actCodeCreator = value => {
  return {
    type: type.ACTCODE,
    payload: value
  };
};

export const queryActCustFlag = value => {
  return {
    type: type.ACT_CUST_FLAG,
    actCustFlag: value
  };
};

export const onSelectChange = value => {
  return {
    type: type.SELECT_CITY_REGION,
    selectCityRegion: value
  };
};
