import * as type from "./action-type";

let initMktConvertData = {
  mktConvertData: {}
};

let initCatalogButeData = {
  catalogButeData: {}
};

let initBrandButeData = {
  brandButeData: []

};
let initCommodityButeData = {
  commodityButeData: []
};

let initChannelButeData = {
  channelButeData: []
};

let initProductButeData = {
  productButeData: []
};

let initCataButeFunlData = {
  cataButeFunlData: []
};

let initDayVal = {
  dayVal: 1
};

let initGroupId = {
  groupId: "ALL"
};

let initChannelId = {
  channelId: "ALL"
};

let initisDuplicate = {
  isDuplicate: 1
};

let initUserInfo = {
  userInfo: {}
};

let initSideBarParam = {
  sideBarParam: false
};
let initSelectNodeList = {
  selectNodeList: {}
}

let initTimeFlag = {
  timeFlag : '1'
}

export const scrollParam = (state = { scrollParam: 0 }, action) => {
  switch (action.type) {
    case type.SCROLL_PARAM:
      return { scrollParam: action.scrollParam };
    default:
      return state;
  }
};

export const topParam = (state = { topParam: 0 }, action) => {
  switch (action.type) {
    case type.TOP_PARAM:
      return { topParam: action.topParam };
    default:
      return state;
  }
};

export const mktConvertData = (state = initMktConvertData, action) => {
  switch (action.type) {
    case type.MKT_CONVERT_DATA:
      return { mktConvertData: action.mktConvertData };
    default:
      return state;
  }
};

export const catalogButeData = (state = initCatalogButeData, action) => {
  switch (action.type) {
    case type.CATALOG_BUTE_DATA:
      return { catalogButeData: action.catalogButeData };
    default:
      return state;
  }
};

export const brandButeData = (state = initBrandButeData, action) => {
  switch (action.type) {
    case type.BRAND_BUTE_DATA:
      return { brandButeData: action.brandButeData };
    default:
      return state;
  }
};

export const commodityButeData = (state = initCommodityButeData, action) => {
  switch (action.type) {
    case type.COMMODITY_BUTE_DATA:
      return { commodityButeData: action.commodityButeData };
    default:
      return state;
  }
};

export const channelButeData = (state = initChannelButeData, action) => {
  switch (action.type) {
    case type.CHANNEL_BUTE_DATA:
      return { channelButeData: action.channelButeData };
    default:
      return state;
  }
};

export const productButeData = (state = initProductButeData, action) => {
  switch (action.type) {
    case type.PRODUCT_BUTE_DATA:
      return { productButeData: action.productButeData };
    default:
      return state;
  }
};

export const cataButeFunlData = (state = initCataButeFunlData, action) => {
  switch (action.type) {
    case type.CATA_BUTE_FUNL_DATA:
      return { cataButeFunlData: action.cataButeFunlData };
    default:
      return state;
  }
};

export const dayVal = (state = initDayVal, action) => {
  switch (action.type) {
    case type.DAY_VAL:
      return { dayVal: action.dayVal };
    default:
      return state;
  }
};

export const groupId = (state = initGroupId, action) => {
  switch (action.type) {
    case type.GROUP_ID:
      return { groupId: action.groupId };
    default:
      return state;
  }
};

export const channelId = (state = initChannelId, action) => {
  switch (action.type) {
    case type.CHANNEL_ID:
      return { channelId: action.channelId };
    default:
      return state;
  }
};

export const isDuplicate = (state = initisDuplicate, action) => {
  switch (action.type) {
    case type.ISDUPLICATE_ID:
      return { isDuplicate: action.isDuplicate };
    default:
      return state;
  }
};

export const userInfo = (state = initUserInfo, action) => {
  switch (action.type) {
    case type.USER_INFO:
      return { userInfo: action.userInfo };
    default:
      return state;
  }
};

export const selectNodeList = (state = initSelectNodeList, action) => {
  switch (action.type) {
    case type.SELECT_NODE_LIST:
      return { selectNodeList: action.selectNodeList };
    default:
      return state;
  }
};

export const sideBarParam = (state = initSideBarParam, action) => {
  switch (action.type) {
    case type.SIDE_BAR_PARAM:
      return { sideBarParam: action.sideBarParam };
    default:
      return state;
  }
};

export const timeFlag = (state = initTimeFlag,action) =>{
  switch (action.type) {
    case type.TIME_FLAG:
      return { timeFlag: action.timeFlag };
    default:
      return state;
  }
}
