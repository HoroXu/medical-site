import { SMART_RECOMMEND, SMART_RECOMMEND_DATA,SMART_RECOMMEND_INDEX } from "../actions";

const initSmartRecommendState = {
  smartRecommendState: true
};

const initSmartRecommendData = {
  smartRecommendData:{}
}

const initSmartRecommendIndex = {
  smartRecommendIndex: -1
}

export function smartRecommendState(state = initSmartRecommendState, action) {
  switch (action.type) {
    case SMART_RECOMMEND:
      console.log(
        action.smartRecommendState,
        "进入smartRecommendState=================reducer"
      );
      return { ...state, smartRecommendState: action.smartRecommendState };
    default:
      return state;
  }
}

export function smartRecommendData(state = initSmartRecommendData, action) {
  switch (action.type) {
    case SMART_RECOMMEND_DATA:
      return { ...state, smartRecommendData: action.smartRecommendData };
    default:
      return state;
  }
}

export function smartRecommendIndex(state= initSmartRecommendIndex,action) {
  switch (action.type) {
    case SMART_RECOMMEND_INDEX:
      return { ...state, smartRecommendIndex: action.smartRecommendIndex };
    default:
      return state;
  }
}
