import {
  STEP_STATUS,
  SELECTED_DATE,
  SELECTED_PRICE,
  CONVERT_VAL,
  DAY_VAL,
  GOODS_LIST,
  CATEGORY_INDEX,
  BRANDS_INDEX,
  GOODS_INDEX,
  BRANDS_CODE,
  GOODS_CODE,
  BUY_TIME,
  CATEGORY_ARR,
  BRANDS_ARR,
  GOODS_ARR,
  IMPORT_SEQNO,
  TOTAL_DATA_COUNT,
  PAGE_NUMBER,
  PAGE_COUNT,
  PERSON_RANGE,
  MONEY_RANGE,
  CURRENT,
  PAGE_HISTORY_DATA,
  REFRESH_TABLE,
  CHANGE_PAGE_PARAM,
  SPIN_PARAM,
  SCROLL_VAL,
  ALL_SELECT_INFO,
  ALL_SELECT_PARAM,
  COMMIT_PARAM
} from "../actions";

const initState = {
  stepPram: 0
};
const initSelectedDate = {
  selectedDataArr: {
    keys: [],
    selectedDataArr: []
  },
  selectedPrice: 0,
  convertVal: 10
};

const initDayVal = {
  dayVal: 7
};
const initGoodsList = {
  goodsList: []
};
const initIndex = {
  category: {
    categoryIndex: 0,
    categoryCode: "",
    categoryName: ""
  },
  goods: {
    goodsIndex: -1,
    goodsCode: "",
    goodsName: ""
  },
  brands: {
    brandsIndex: -1,
    brandsCode: "",
    brandsName: "全部品牌"
  }
};
const initCode = {
  brandsCode: "",
  goodsCode: ""
};
const initTime = {
  beginTime: "",
  endTime: ""
};

const initArr = {
  categoryArr: [],
  brandsArr: [],
  goodsArr: []
};

const initSeqNo = {
  importResult: {}
};

const initPageInfo = {
  pageCount: 0, //总页数
  pageNumber: 1, //当前页数
  totalDataCount: 0 //总数
};

const initRange = {
  personRange: "",
  moneyRange: ""
};
const initCurrent = {
  current: 0
};

const initPageHistoryData = {
  pageHistoryData: []
};

const initRefreshParams = {
  refreshTableParams: false
};
const initPageParams = {
  changePageParam: false
};
const initSpinParams = {
  spinParams: false
};

const initScrollVal = {
  scrollVal: 0
};

const initAllSelectInfo = {
  allSelectInfo: {}
};

const initAllSelectParam = {
  allSelectParam: {}
};

const initCommitParam = {
  commitParam: false
};
export function stepStatus(state = initState, action) {
  switch (action.type) {
    case STEP_STATUS:
      return Object.assign({}, state, { stepPram: action.stepPram });
    default:
      return state;
  }
}

export function selectedDate(state = initSelectedDate, action) {
  switch (action.type) {
    case SELECTED_DATE:
      return Object.assign({}, state, {
        selectedDataArr: {
          keys: action.keys,
          selectedDataArr: action.selectedData
        }
      });
    case SELECTED_PRICE:
      return Object.assign({}, state, { selectedPrice: action.selectedPrice });
    case CONVERT_VAL:
      return Object.assign({}, state, { convertVal: action.convertVal });
    default:
      return state;
  }
}

export function queryDayVal(state = initDayVal, action) {
  switch (action.type) {
    case DAY_VAL:
      return Object.assign({}, state, { dayVal: action.dayVal });
    default:
      return state;
  }
}

export function queryGoodsList(state = initGoodsList, action) {
  switch (action.type) {
    case GOODS_LIST:
      return Object.assign({}, state, { goodsList: action.goodsList });
    default:
      return state;
  }
}

//获取点击的Current

export function queryIndex(state = initIndex, action) {
  switch (action.type) {
    case CATEGORY_INDEX:
      return Object.assign({}, state, {
        category: {
          categoryIndex: action.categoryIndex,
          categoryCode: action.categoryCode,
          categoryName: action.categoryName
        }
      });
    case BRANDS_INDEX:
      return Object.assign({}, state, {
        brands: {
          brandsIndex: action.brandsIndex,
          brandsCode: action.brandsCode,
          brandsName: action.brandsName
        }
      });
    case GOODS_INDEX:
      return Object.assign({}, state, {
        goods: {
          goodsIndex: action.goodsIndex,
          goodsCode: action.goodsCode,
          goodsName: action.goodsName
        }
      });
    default:
      return state;
  }
}

export function queryCode(state = initCode, action) {
  switch (action.type) {
    case BRANDS_CODE:
      return Object.assign({}, state, { brandsCode: action.brandsCode });
    case GOODS_CODE:
      return Object.assign({}, state, { goodsCode: action.goodsCode });
    default:
      return state;
  }
}

export function queryBuyTime(state = initTime, action) {
  switch (action.type) {
    case BUY_TIME:
      return Object.assign({}, state, {
        beginTime: action.beginTime,
        endTime: action.endTime
      });
    default:
      return state;
  }
}

export function queryArr(state = initArr, action) {
  switch (action.type) {
    case CATEGORY_ARR:
      return Object.assign({}, state, { categoryArr: action.categoryArr });
    case BRANDS_ARR:
      return Object.assign({}, state, { brandsArr: action.brandsArr });
    case GOODS_ARR:
      return Object.assign({}, state, { goodsArr: action.goodsArr });
    default:
      return state;
  }
}

export function querySeqNo(state = initSeqNo, action) {
  switch (action.type) {
    case IMPORT_SEQNO:
      return Object.assign({}, state, { importResult: action.importResult });
    default:
      return state;
  }
}

export function queryPageInfo(state = initPageInfo, action) {
  switch (action.type) {
    case PAGE_COUNT:
      return Object.assign({}, state, { pageCount: action.pageCount });
    case PAGE_NUMBER:
      return Object.assign({}, state, { pageNumber: action.pageNumber });
    case TOTAL_DATA_COUNT:
      return Object.assign({}, state, {
        totalDataCount: action.totalDataCount
      });
    default:
      return state;
  }
}

export function queryRange(state = initRange, action) {
  switch (action.type) {
    case PERSON_RANGE:
      return Object.assign({}, state, { personRange: action.personRange });
    case MONEY_RANGE:
      return Object.assign({}, state, { moneyRange: action.moneyRange });
    default:
      return state;
  }
}

export function queryCurrent(state = initCurrent, action) {
  switch (action.type) {
    case CURRENT:
      return Object.assign({}, state, { current: action.current });
    default:
      return state;
  }
}

export function queryPageHistoryData(state = initPageHistoryData, action) {
  switch (action.type) {
    case PAGE_HISTORY_DATA:
      return Object.assign({}, state, {
        pageHistoryData: action.pageHistoryData
      });
    default:
      return state;
  }
}

export function changeRefreshTable(state = initRefreshParams, action) {
  switch (action.type) {
    case REFRESH_TABLE:
      return Object.assign({}, state, {
        refreshTableParams: action.refreshTableParams
      });
    default:
      return state;
  }
}

export function changePageParam(state = initPageParams, action) {
  switch (action.type) {
    case CHANGE_PAGE_PARAM:
      return Object.assign({}, state, {
        changePageParam: action.changePageParam
      });
    default:
      return state;
  }
}

export function spinParam(state = initSpinParams, action) {
  switch (action.type) {
    case SPIN_PARAM:
      return Object.assign({}, state, {
        spinParam: action.spinParam
      });
    default:
      return state;
  }
}

export function queryScrollVal(state = initScrollVal, action) {
  switch (action.type) {
    case SCROLL_VAL:
      return Object.assign({}, state, { scrollVal: action.scrollVal });
    default:
      return state;
  }
}

export function allSelectInfo(state = initAllSelectInfo, action) {
  switch (action.type) {
    case ALL_SELECT_INFO:
      return Object.assign({}, state, { allSelectInfo: action.allSelectInfo });
    default:
      return state;
  }
}

export function allSelectParam(state = initAllSelectParam, action) {
  switch (action.type) {
    case ALL_SELECT_PARAM:
      return Object.assign({}, state, {
        allSelectParam: action.allSelectParam
      });
    default:
      return state;
  }
}

export function commitParam(state = initCommitParam, action) {
  switch (action.type) {
    case COMMIT_PARAM:
      return {
        ...state,
        commitParam: action.commitParam
      };
    default:
      return state;
  }
}
