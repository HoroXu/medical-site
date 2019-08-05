import {
  EVENT_CHANNEL,
  DATA_DETAIL,
  MONITOR_EVENT_CODE,
  MONITOR_EVENT_TYPE,
  RANGE_DATE,
  ANALYSIS_DATA,
  GET_TIME_RANGE
} from "../actions";

const initEventChannel = {
  eventChannel: {}
};
const initDataDetail = {
  dataDetail: {}
};
const initMonitorEventCode = {
  monitorEventCode: ""
};
const initMonitorEventType = {
  monitorEventType: ""
};

const initRangeDate = {
  rangeDate: {
    startDate: "",
    endDate: ""
  }
};
const initAnalysisData = {
  analysisData:{}

}

export function eventChannelInfo(state = initEventChannel, action) {
  switch (action.type) {
    case EVENT_CHANNEL:
      return {
        ...state,
        eventChannel: action.eventChannel
      };
    default:
      return state;
  }
}

export function dataDetailInfo(state = initDataDetail, action) {
  switch (action.type) {
    case DATA_DETAIL:
      return {
        ...state,
        dataDetail: action.dataDetail
      };
    default:
      return state;
  }
}

export function monitorEventCodeInfo(state = initMonitorEventCode, action) {
  switch (action.type) {
    case MONITOR_EVENT_CODE:
      return {
        ...state,
        monitorEventCode: action.monitorEventCode
      };
    default:
      return state;
  }
}

export function monitorEventTypeInfo(state = initMonitorEventType, action) {
  switch (action.type) {
    case MONITOR_EVENT_TYPE:
      return {
        ...state,
        monitorEventType: action.monitorEventType
      };
    default:
      return state;
  }
}

export function rangeDate(state = initRangeDate, action) {
  switch (action.type) {
    case RANGE_DATE:
      return {
        ...state,
        rangeDate: {
          startDate: action.startDate,
          endDate: action.endDate
        }
      };
    default:
      return state;
  }
}

export function analysisData(state = initAnalysisData,action) {
  switch(action.type) {
    case ANALYSIS_DATA: 
    return {
      ...state, analysisData:action.analysisData
    }
    default:
    return state;
  }
}

export function rangeTime(state = {}, action) {
  switch(action.type) {
    case GET_TIME_RANGE: 
    return {
      ...state, ...action.rangeTime
    }
    default:
    return state;
  }
}