import * as type from "./action-type";

export const queryScrollParam = val => {
  return {
    type: type.SCROLL_PARAM,
    scrollParam: val
  };
};

export const queryTopParam = val => {
  return {
    type: type.TOP_PARAM,
    topParam: val
  };
};

export const queryMktConvertData = val => {
  return {
    type: type.MKT_CONVERT_DATA,
    mktConvertData: val
  };
};

//营销贡献分析
export const queryCatalogBute = val => {
  return {
    type: type.CATALOG_BUTE_DATA,
    catalogButeData: val
  };
};

//品牌贡献分析
export const queryBrandBute = val => {
  return {
    type: type.BRAND_BUTE_DATA,
    brandButeData: val
  };
};

//商品组贡献分析
export const queryCommodityBute = val => {
  return {
    type: type.COMMODITY_BUTE_DATA,
    commodityButeData: val
  };
};

//渠道贡献分析

export const queryChannelBute = val => {
  return {
    type: type.CHANNEL_BUTE_DATA,
    channelButeData: val
  };
};

//产品贡献分析

export const queryProductBute = val => {
  return {
    type: type.PRODUCT_BUTE_DATA,
    productButeData: val
  };
};

export const queryCataButeFunl = val => {
  return {
    type: type.CATA_BUTE_FUNL_DATA,
    cataButeFunlData: val
  };
};

export const queryDayVal = val => {
  return {
    type: type.DAY_VAL,
    dayVal: val
  };
};

export const queryGroupId = val => {
  return {
    type: type.GROUP_ID,
    groupId: val
  };
};

export const queryChannelId = val => {
  return {
    type: type.CHANNEL_ID,
    channelId: val
  };
};
export const queryIsDuplicate = val => {
  return {
    type: type.ISDUPLICATE_ID,
    isDuplicate: val
  };
};
export const queryUserInfo = val => {
  return {
    type: type.USER_INFO,
    userInfo: val
  };
};

//获取下拉框数据

export const querySelectNodeListery = val => {
  return {
    type: type.SELECT_NODE_LIST,
    selectNodeList: val
  };
};

export const querySideBarParam = val => {
  return {
    type: type.SIDE_BAR_PARAM,
    sideBarParam: val
  };
};

export const queryTimeFlag = val => {
  return {
    type: type.TIME_FLAG,
    timeFlag: val
  };
};
