import {
  ALL_SELECTED_ROWKEYS,
  SELECTED_ROW_KEYS,
  SELECT_PARAM,
  REAL_SELECT_LIST,
  BRAND_LIST,
  SINGLE_GOODS_INFO,
  SHOW_BRANDS_MORE,
  SHOW_GOODS_MORE,
  SEARCH_VAL,
  SEARCH_ARR,
  IS_KEY_SELECTED_ALL
} from "../actions";

const initAllSelectedInfo = {
  allSelectedInfo: {
    code: "",
    name: "",
    allSelectedRowKeys: [],
    allSelectedData: [],
    allSelectedInfoArr: []
  }
};

const initSelectedRowKeys = {
  selectedRowKeys: []
};

const initSelectParam = {
  isAllSelected: 0
};

const initRealSelectList = {
  realSelectList: {}
};
const initBrandList = {
  brandList: []
};
const initSingleGoodsInfo = {
  brandsCode: "",
  totalDataCount: 0, //总数
  singleGoodsInfoArr: []
};
const initShowBrandsMore = {
  showBrandsMore: false
};

const initShowGoodsMore = {
  showGoodsMore: false
};

const initSearchVal = {
  searchVal: ""
};
const initSearchArr = {
  searchArr: []
};

export function allSelectedInfo(state = initAllSelectedInfo, action) {
  switch (action.type) {
    case ALL_SELECTED_ROWKEYS:
      return {
        ...state,
        allSelectedInfo: {
          code: action.code,
          name: action.name,
          allSelectedRowKeys: action.allSelectedRowKeys,
          allSelectedData: action.allSelectedData,
          allSelectedInfoArr: action.allSelectedInfoArr
        }
      };
    default:
      return state;
  }
}

export function selectedRowKeys(state = initSelectedRowKeys, action) {
  switch (action.type) {
    case SELECTED_ROW_KEYS:
      return {
        ...state,
        selectedRowKeys: action.selectedRowKeys
      };
    default:
      return state;
  }
}

export function selectParam(state = initSelectParam, action) {
  switch (action.type) {
    case SELECT_PARAM:
      return {
        ...state,
        isAllSelected: action.isAllSelected
      };
    default:
      return state;
  }
}

export function brandList(state = initBrandList, action) {
  switch (action.type) {
    case BRAND_LIST:
      return {
        ...state,
        brandList: action.brandList
      };
    default:
      return state;
  }
}

export function realSelectList(state = initRealSelectList, action) {
  switch (action.type) {
    case REAL_SELECT_LIST:
      return {
        ...state,
        realSelectList: action.realSelectList
      };
    default:
      return state;
  }
}

export function singleGoodsInfo(state = initSingleGoodsInfo, action) {
  switch (action.type) {
    case SINGLE_GOODS_INFO:
      return {
        ...state,
        brandsCode: action.code,
        totalDataCount: action.totalDataCount,
        singleGoodsInfoArr: action.singleGoodsInfoArr
      };
    default:
      return state;
  }
}

export function showBrandsMore(state = initShowBrandsMore, action) {
  switch (action.type) {
    case SHOW_BRANDS_MORE:
      return {
        ...state,
        showBrandsMore: action.showBrandsMore
      };
    default:
      return state;
  }
}

export function showGoodsMore(state = initShowGoodsMore, action) {
  switch (action.type) {
    case SHOW_GOODS_MORE:
      return {
        ...state,
        showGoodsMore: action.showGoodsMore
      };
    default:
      return state;
  }
}

export function searchVal(state = initSearchVal, action) {
  switch (action.type) {
    case SEARCH_VAL:
      return {
        ...state,
        searchVal: action.searchVal
      };
    default:
      return state;
  }
}

export function searchArr(state = initSearchArr, action) {
  switch (action.type) {
    case SEARCH_ARR:
      return {
        ...state,
        searchArr: action.searchArr
      };
    default:
      return state;
  }
}

export function selectedAllKey(state = {}, action) {
  switch (action.type) {
    case IS_KEY_SELECTED_ALL:
      return action.IsKeySelectedAll
    default:
      return state;
  }
}