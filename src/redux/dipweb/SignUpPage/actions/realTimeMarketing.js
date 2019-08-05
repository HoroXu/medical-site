import {
  ALL_SELECTED_ROWKEYS,
  REAL_TIME_MARKETING_CURRENT_STEP,
  REAL_TIME_MARKETING_SETTING,
  SELECTED_ROW_KEYS,
  SELECT_PARAM,
  REAL_SELECT_LIST,
  BRAND_LIST,
  REAL_TIME_MARKETING_EVENTCODE,
  REAL_TIME_MARKETING_SETTING_RESET,
  REAL_TIME_MARKETING_NUM,
  SINGLE_GOODS_INFO,
  SHOW_BRANDS_MORE,
  SHOW_GOODS_MORE,
  SEARCH_VAL,
  SEARCH_ARR,
  IS_KEY_SELECTED_ALL
} from "./index";

export const createRealTimeMarketingStep = index => {
  return {
    type: REAL_TIME_MARKETING_CURRENT_STEP,
    payload: index
  };
};

export const createRealTimeSetting = value => {
  return {
    type: REAL_TIME_MARKETING_SETTING,
    payload: value
  };
};

export const resetRealTimeSetting = () => {
  return {
    type: REAL_TIME_MARKETING_SETTING_RESET
  };
};

export function queryAllSelectedInfo(
  code,
  name,
  allSelectedRowKeys,
  allSelectedData,
  allSelectedInfoArr
) {
  console.log(
    code,
    name,
    allSelectedRowKeys,
    allSelectedData,
    allSelectedInfoArr,
    "queryAllSelectedInfo==========actions"
  );
  if (allSelectedInfoArr.length == 0 && allSelectedRowKeys.length > 0) {
    allSelectedInfoArr.push({
      code: code,
      name: name,
      allSelectedRowKeys: allSelectedRowKeys,
      allSelectedData: allSelectedData
    });
  } else {
    const param = allSelectedInfoArr.some(function(item, index, arr) {
      return code == item.code;
    });
    if (param) {
      for (let val of allSelectedInfoArr) {
        if (code == val.code) {
          val.name = name;
          val.allSelectedRowKeys = allSelectedRowKeys;
          val.allSelectedData = allSelectedData;
        }
      }
    } else if (allSelectedRowKeys.length > 0) {
      allSelectedInfoArr.push({
        code: code,
        name: name,
        allSelectedRowKeys: allSelectedRowKeys,
        allSelectedData: allSelectedData
      });
    }
  }

  return {
    type: ALL_SELECTED_ROWKEYS,
    code,
    name,
    allSelectedRowKeys,
    allSelectedData,
    allSelectedInfoArr
  };
}

export function querySelectedRowKeys(val) {
  return {
    type: SELECTED_ROW_KEYS,
    selectedRowKeys: val
  };
}

export const createEventCode = code => {
  return {
    type: REAL_TIME_MARKETING_EVENTCODE,
    payload: code
  };
};

export function querySelectParam(isAllSelected) {
  return {
    type: SELECT_PARAM,
    isAllSelected
  };
}

export function queryRealSelectList(val) {
  return {
    type: REAL_SELECT_LIST,
    realSelectList: val
  };
}

export function queryBrandList(val) {
  return {
    type: BRAND_LIST,
    brandList: val
  };
}

export const createRealTimeNum = obj => {
  return {
    type: REAL_TIME_MARKETING_NUM,
    payload: obj
  };
};

export function querySingleGoodsInfo(
  code,
  totalDataCount,
  singleGoodsInfoArr
) {
  if (singleGoodsInfoArr.length == 0) {
    singleGoodsInfoArr.push({
      brandsCode: code,
      totalDataCount: totalDataCount
    });
  } else {
    const param = singleGoodsInfoArr.some(function(item, index, arr) {
      return code == item.brandsCode;
    });

    if (!param) {
      singleGoodsInfoArr.push({
        brandsCode: code,
        totalDataCount: totalDataCount
      });
    }
  }

  return {
    type: SINGLE_GOODS_INFO,
    code,
    totalDataCount,
    singleGoodsInfoArr
  };
};

export function queryShowBrandsMore(val) {
  return {
    type: SHOW_BRANDS_MORE,
    showBrandsMore: val
  }
};
export function queryShowGoodsMore(val) {
  return {
    type: SHOW_GOODS_MORE,
    showGoodsMore: val
  }
}

export function querySearchVal(val) {
  return {
    type: SEARCH_VAL,
    searchVal:val
  }
}

export function querySearchArr(val) {
  // let a = [];
  // a.push(val)
  return {
    type: SEARCH_ARR,
    searchArr: val
  }
}

export function queryIsKeySelectedAll(val) {
  return {
    type: IS_KEY_SELECTED_ALL,
    IsKeySelectedAll: val
  }
}

