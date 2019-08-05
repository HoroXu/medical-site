import { EVENT_CHANNEL, DATA_DETAIL,MONITOR_EVENT_CODE,MONITOR_EVENT_TYPE,RANGE_DATE,ANALYSIS_DATA, GET_TIME_RANGE } from "./index";

export function queryEventAndChannel(val) {
  return {
    type: EVENT_CHANNEL,
    eventChannel: val
  };
}

export function queryDataDetail(val) {
  return {
    type: DATA_DETAIL,
    dataDetail: val
  };
}

export function queryMonitorEventCode(val) {
    return {
        type: MONITOR_EVENT_CODE,
        monitorEventCode:val
    }
}

export function queryMonitorEventType(val) {
    return {
        type: MONITOR_EVENT_TYPE,
        monitorEventType:val
    }
}

export function queryRangeDate(startDate,endDate) {
  return {
    type: RANGE_DATE,
    startDate:startDate,
    endDate:endDate
  }
}

export function queryAnalysisData(val) {
  return {
    type: ANALYSIS_DATA,
    analysisData: val
  } 
}

export function queryTimeRange(val) {
  return {
    type: GET_TIME_RANGE,
    rangeTime: val
  } 
}