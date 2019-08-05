import * as type from "./action-type";

export const settingCreator = value => {
  console.log(value, "NORMAL_SETTING=========");
  return {
    type: type.NORMAL_SETTING,
    payload: value
  };
};

export const resetSettingCreator = () => {
  return {
    type: type.NORMAL_SETTING_RESET
  };
};

export const normalChannelCreator = value => {
  console.log(value, "NORMAL_CHANNEL=========");
  return {
    type: type.NORMAL_CHANNEL,
    payload: value
  };
};

export const resetChannelCreator = () => {
  return {
    type: type.NORMAL_CHANNEL_RESET
  };
};
