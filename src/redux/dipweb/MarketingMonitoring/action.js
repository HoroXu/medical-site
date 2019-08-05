import * as type from "./action-type";

export const queryMarketingMonitoringList = val => {
  return {
    type: type.MARKET_MONITORING_LIST,
    marketingMonitoringList: val
  };
};

export const queryMarketingMonitoringStatus = val => {
  return {
    type: type.MARKET_MONITORING_STATUS,
    marketingMonitoringStatus: val
  };
};

export const queryMarketingMonitoringInputVal = val => {
  return {
    type: type.MARKET_MONITORING_INPUT_VAL,
    marketingMonitoringInputVal: val
  };
};

export const queryMarketingMonitoringActiveTime = val => {
  return {
    type: type.MARKET_MONITORING_ACTIVE_TIME,
    marketingMonitoringActiveTime: val
  };
};

export const querySearchListPageChange = val => {
  return {
    type: type.SEARCH_LIST_PAGE_CHANGE,
    searchListPageChange: val
  };
};

export const querySearchListPageChange1 = val => {
  return {
    type: type.SEARCH_LIST_PAGE_CHANGE_ONE,
    searchListPageChange1: val
  };
};
export const querySearchListPageChange2 = val => {
  return {
    type: type.SEARCH_LIST_PAGE_CHANGE_TWO,
    searchListPageChange2: val
  };
};
export const querySearchListPageChange3 = val => {
  return {
    type: type.SEARCH_LIST_PAGE_CHANGE_THREE,
    searchListPageChange3: val
  };
};

export const queryMarketingMonitoringScene = val => {
  return {
    type: type.MARKET_MONITORING_SCENE,
    marketingMonitoringScene: val
  };
};

export const queryMarketingMonitoringChannel = val => {
  return {
    type: type.MARKET_MONITORING_CHANNEL,
    marketingMonitoringChannel: val
  };
};

export const queryMarketingMonitoringInitiator = val => {
  return {
    type: type.MARKET_MONITORING_INITIATOR,
    marketingMonitoringInitiator: val
  };
};

export const querySwitchStatus = val => {
  return {
    type: type.MARKET_MONITORING_SWITCH,
    marketingMonitoringSwitch: val
  };
};

export const queryMarketingMonitoringHistoryCondition = val => {
  return {
    type: type.MARKET_MONITORING_HISTORY_CONDITION,
    marketingMonitoringHistoryCondition: val
  };
};

export const queryTabKey = val => {
  return {
    type: type.TAB_KEY,
    tabKey: val
  };
};
