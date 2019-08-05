import * as type from "./action-type";

let initMarketingMonitoringList = {
  marketingMonitoringList: {}
};
let initMarketingMonitoringInputVal = {
  marketingMonitoringInputVal: ""
};
let initMarketingMonitoringActiveTime = {
  marketingMonitoringActiveTime: ["", ""]
};

let initSearchListPageChange = {
  searchListPageChange: 0
};

let initSearchListPageChange1 = {
  searchListPageChange1: 1
};

let initSearchListPageChange2 = {
  searchListPageChange2: 1
};

let initSearchListPageChange3 = {
  searchListPageChange3: 1
};

let initMarketingMonitoringStatus = {
  marketingMonitoringStatus: 0
};

let initMarketingMonitoringScene = {
  marketingMonitoringScene: ""
};

let initMarketingMonitoringChannel = {
  marketingMonitoringChannel: ""
};

let initMarketingMonitoringInitiator = {
  marketingMonitoringInitiator: ""
};

let initMarketingMonitoringSwitch = {
  marketingMonitoringSwitch: true
};

let initMarketingMonitoringHistoryCondition = {
  marketingMonitoringHistoryCondition: [
    {
      marketingMonitoringInputVal: "",
      marketingMonitoringChannel: "",
      marketingMonitoringInitiator: "",
      searchListPageChange: 1,
      marketingMonitoringActiveTime: ["", ""],
      marketingMonitoringGroupStatus: ""
    },
    {
      marketingMonitoringInputVal: "",
      marketingMonitoringChannel: "",
      marketingMonitoringInitiator: "",
      searchListPageChange: 1,
      marketingMonitoringActiveTime: ["", ""]
    },
    {
      marketingMonitoringInputVal: "",
      marketingMonitoringChannel: "",
      marketingMonitoringInitiator: "",
      searchListPageChange: 1,
      marketingMonitoringActiveTime: ["", ""]
    },
    {
      marketingMonitoringInputVal: "",
      marketingMonitoringChannel: "",
      marketingMonitoringInitiator: "",
      searchListPageChange: 1,
      marketingMonitoringActiveTime: ["", ""]
    }
  ]
};

// let initMarketingMonitoringHistoryCondition = {
//   marketingMonitoringHistoryCondition: {}
// };

let initTabKey = {
  tabKey: 1
};

export const marketingMonitoringList = (
  state = initMarketingMonitoringList,
  action
) => {
  switch (action.type) {
    case type.MARKET_MONITORING_LIST:
      return { marketingMonitoringList: action.marketingMonitoringList };
    default:
      return state;
  }
};

export const marketingMonitoringStatus = (
  state = initMarketingMonitoringStatus,
  action
) => {
  switch (action.type) {
    case type.MARKET_MONITORING_STATUS:
      return {
        marketingMonitoringStatus: action.marketingMonitoringStatus
      };
    default:
      return state;
  }
};

export const marketingMonitoringInputVal = (
  state = initMarketingMonitoringInputVal,
  action
) => {
  switch (action.type) {
    case type.MARKET_MONITORING_INPUT_VAL:
      return {
        marketingMonitoringInputVal: action.marketingMonitoringInputVal
      };
    default:
      return state;
  }
};

export const marketingMonitoringActiveTime = (
  state = initMarketingMonitoringActiveTime,
  action
) => {
  switch (action.type) {
    case type.MARKET_MONITORING_ACTIVE_TIME:
      return {
        marketingMonitoringActiveTime: action.marketingMonitoringActiveTime
      };
    default:
      return state;
  }
};

export const searchListPageChange = (
  state = initSearchListPageChange,
  action
) => {
  switch (action.type) {
    case type.SEARCH_LIST_PAGE_CHANGE:
      return {
        searchListPageChange: action.searchListPageChange
      };
    default:
      return state;
  }
};

export const searchListPageChange1 = (
  state = initSearchListPageChange1,
  action
) => {
  switch (action.type) {
    case type.SEARCH_LIST_PAGE_CHANGE_ONE:
      return {
        searchListPageChange1: action.searchListPageChange1
      };
    default:
      return state;
  }
};

export const searchListPageChange2 = (
  state = initSearchListPageChange2,
  action
) => {
  switch (action.type) {
    case type.SEARCH_LIST_PAGE_CHANGE_TWO:
      return {
        searchListPageChange2: action.searchListPageChange2
      };
    default:
      return state;
  }
};


export const searchListPageChange3 = (
  state = initSearchListPageChange3,
  action
) => {
  switch (action.type) {
    case type.SEARCH_LIST_PAGE_CHANGE_THREE:
      return {
        searchListPageChange3: action.searchListPageChange3
      };
    default:
      return state;
  }
};



export const marketingMonitoringScene = (
  state = initMarketingMonitoringScene,
  action
) => {
  switch (action.type) {
    case type.MARKET_MONITORING_SCENE:
      return {
        marketingMonitoringScene: action.marketingMonitoringScene
      };
    default:
      return state;
  }
};

export const marketingMonitoringChannel = (
  state = initMarketingMonitoringChannel,
  action
) => {
  switch (action.type) {
    case type.MARKET_MONITORING_CHANNEL:
      return {
        marketingMonitoringChannel: action.marketingMonitoringChannel
      };
    default:
      return state;
  }
};

export const marketingMonitoringInitiator = (
  state = initMarketingMonitoringInitiator,
  action
) => {
  switch (action.type) {
    case type.MARKET_MONITORING_INITIATOR:
      return {
        marketingMonitoringInitiator: action.marketingMonitoringInitiator
      };
    default:
      return state;
  }
};

export const marketingMonitoringSwitch = (
  state = initMarketingMonitoringSwitch,
  action
) => {
  switch (action.type) {
    case type.MARKET_MONITORING_SWITCH:
      return {
        marketingMonitoringSwitch: action.marketingMonitoringSwitch
      };
    default:
      return state;
  }
};

export const marketingMonitoringHistoryCondition = (
  state = initMarketingMonitoringHistoryCondition,
  action
) => {
  switch (action.type) {
    case type.MARKET_MONITORING_HISTORY_CONDITION:
      return {
        marketingMonitoringHistoryCondition:
          action.marketingMonitoringHistoryCondition
      };
    default:
      return state;
  }
};

export const tabKey = (state = initTabKey, action) => {
  switch (action.type) {
    case type.TAB_KEY:
      return {
        tabKey: action.tabKey
      };
    default:
      return state;
  }
};
