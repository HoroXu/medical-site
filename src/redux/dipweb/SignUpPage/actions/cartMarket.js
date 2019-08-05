import {
  STEP_STATUS,
  BRANDS_ARR,
  BRANDS_CODE,
  BRANDS_INDEX,
  BUY_TIME,
  CATEGORY_ARR,
  CATEGORY_INDEX,
  CHANGE_PAGE_PARAM,
  CONVERT_VAL,
  SCROLL_VAL,
  CURRENT,
  DAY_VAL,
  GOODS_ARR,
  GOODS_CODE,
  GOODS_INDEX,
  GOODS_LIST,
  IMPORT_SEQNO,
  MONEY_RANGE,
  PAGE_COUNT,
  PAGE_HISTORY_DATA,
  PAGE_NUMBER,
  PERSON_RANGE,
  REFRESH_TABLE,
  SELECTED_DATE,
  SELECTED_PRICE,
  SPIN_PARAM,
  TOTAL_DATA_COUNT,
  ALL_SELECT_INFO,
  ALL_SELECT_PARAM,
  COMMIT_PARAM
} from "./index";

export function changeStepAction(stepPram) {
  return {
    type: STEP_STATUS,
    stepPram: stepPram + 1
  };
}

export const createStep = index => {
  return {
    type: STEP_STATUS,
    stepPram: index
  };
};

export function queryBrandsArr(arr) {
  return {
    type: BRANDS_ARR,
    brandsArr: arr
  };
}

export function queryBrandsCode(code) {
  return {
    type: BRANDS_CODE,
    brandsCode: code
  };
}

export function queryBrandsIndex(index, code, name) {
  return {
    type: BRANDS_INDEX,
    brandsIndex: index,
    brandsCode: code,
    brandsName: name
  };
}

export function queryBuyTime(beginTime, endTime) {
  return {
    type: BUY_TIME,
    beginTime,
    endTime
  };
}

export function queryCategoryArr(arr) {
  return {
    type: CATEGORY_ARR,
    categoryArr: arr
  };
}

export function queryCategoryIndex(index, code, name) {
  return {
    type: CATEGORY_INDEX,
    categoryIndex: index,
    categoryCode: code,
    categoryName: name
  };
}

export function changePageParam(val) {
  return {
    type: CHANGE_PAGE_PARAM,
    changePageParam: val
  };
}

export function queryConvertVal(price) {
  return {
    type: CONVERT_VAL,
    convertVal: price
  };
}

export function queryScrollVal(val) {
  return {
    type: SCROLL_VAL,
    scrollVal: val
  };
}

export function queryCurrent(val) {
  return {
    type: CURRENT,
    current: val
  };
}

export function queryDayVal(value) {
  return {
    type: DAY_VAL,
    dayVal: value
  };
}
export function queryGoodsArr(arr) {
  return {
    type: GOODS_ARR,
    goodsArr: arr
  };
}

export function queryGoodsCode(code) {
  return {
    type: GOODS_CODE,
    goodsCode: code
  };
}

export function queryGoodsIndex(index, code, name) {
  return {
    type: GOODS_INDEX,
    goodsIndex: index,
    goodsCode: code,
    goodsName: name
  };
}

export function queryGoodsList(arr) {
  return {
    type: GOODS_LIST,
    goodsList: arr
  };
}

export function querySeqNo(val) {
  return {
    type: IMPORT_SEQNO,
    importResult: val
  };
}

export function queryMoneyRange(val) {
  return {
    type: MONEY_RANGE,
    moneyRange: val
  };
}

export function queryPageCount(val) {
  return {
    type: PAGE_COUNT,
    pageCount: val
  };
}
export function queryPageHistoryData(val) {
  return {
    type: PAGE_HISTORY_DATA,
    pageHistoryData: val
  };
}

export function queryPageNumber(val) {
  return {
    type: PAGE_NUMBER,
    pageNumber: val
  };
}

export function queryPersonRange(val) {
  return {
    type: PERSON_RANGE,
    personRange: val
  };
}

export function changeRefreshTable(val) {
  return {
    type: REFRESH_TABLE,
    refreshTableParams: val
  };
}

export function querySelectedDate(keys, dataArr) {
  const selectedData = [];

  for (let value of keys) {
    for (let dataValue of dataArr) {
      if (value == dataValue.key) {
        selectedData.push(dataValue);
      }
    }
  }

  function arrayUnique2(arr, name) {
    var hash = {};
    return arr.reduce(function(item, next) {
      hash[next[name]] ? "" : (hash[next[name]] = true && item.push(next));
      return item;
    }, []);
  }

  const a = arrayUnique2(selectedData, "goodsCode");

  // const a = Array.from(new Set(selectedData));
  return {
    type: SELECTED_DATE,
    keys,
    selectedData: a
  };
}

export function querySelectedPrice(keys, dataArr) {
  function arrayUnique2(arr, name) {
    var hash = {};
    return arr.reduce(function(item, next) {
      hash[next[name]] ? "" : (hash[next[name]] = true && item.push(next));
      return item;
    }, []);
  }

  const a = arrayUnique2(dataArr, "goodsCode");
  let selectedPrice = 0;
  for (let value of keys) {
    for (let dataValue of a) {
      if (value == dataValue.key) {
        selectedPrice = dataValue.salesAmount + selectedPrice;
      }
    }
  }
  return {
    type: SELECTED_PRICE,
    selectedPrice
  };
}

export function spinParam(val) {
  return {
    type: SPIN_PARAM,
    spinParam: val
  };
}

export function queryTotalDataCount(val) {
  return {
    type: TOTAL_DATA_COUNT,
    totalDataCount: val
  };
}

export function queryAllSelectInfo(val) {
  return {
    type: ALL_SELECT_INFO,
    allSelectInfo: val
  };
}

export function queryAllSelectParam(val) {
  return {
    type: ALL_SELECT_PARAM,
    allSelectParam: val
  };
}

export function queryCommitParam(val) {
  return {
    type: COMMIT_PARAM,
    commitParam: val
  };
}

// export function querySettingVals(val) {
//   return {
//     type: SETTING_VALS,

//   }
// }
