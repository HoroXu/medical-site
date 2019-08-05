import {SMART_RECOMMEND,SMART_RECOMMEND_DATA,SMART_RECOMMEND_INDEX} from './index';

export function querySmartRecommendState(val) {
    return {
        type: SMART_RECOMMEND,
        smartRecommendState : !val
    }
}

export function querySmartRecommendData(smartRecommendData) {
    return {
        type: SMART_RECOMMEND_DATA,
        smartRecommendData
    }
}

export function querySmartRecommendIndex(index) {
    return {
        type: SMART_RECOMMEND_INDEX,
        smartRecommendIndex:index
    }
}