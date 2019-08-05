import {
  TAB_ACTIVE_KEY,
  TABLE_DATA_LIST,
  EVENT_TYPE,
  EVENT_STATUS,
  KEY_NAME,
  TIME_RANGE,
  MANAGEMENT_PAGE_NUMBER,
  INITIATOR_NAME,
  SOURCE,
  EVENT_CODE,
  EVENT_DETAIL_SOURCE,
  ALL_EVENT_DETAIL,
  AUDITED_COUNT
} from "../actions";

const initTabActiveKey = {
  tabActiveKey: 1
};

const initTableDataList = {
  tableDataList: {}
};

const initFilterConditions = {
  eventType: 1,
  eventStatus: "",
  keyName: "",
  timeRange: "",
  pageNumber: 1,
  initiatorName: "",
  source: ""
};

const initEventCode = {
  eventCode: ""
};

const initEventDetailSource = {
  eventDetailSource:''
}

const initAllEventDetail = {
  allEventDetail: {}
}

const initAuditedCount = {
  auditedCount: 0
}

export function queryTabActiveKey(state = initTabActiveKey, action) {
  switch (action.type) {
    case TAB_ACTIVE_KEY:
      console.log(action, "queryTabActiveKey=============reducer");
      return Object.assign({}, state, { tabActiveKey: action.tabActiveKey });
    default:
      return state;
  }
}

export function queryTableDataList(state = initTableDataList, action) {
  switch (action.type) {
    case TABLE_DATA_LIST:
      console.log(action, "queryTableDataList=============reducer");
      return Object.assign({}, state, { tableDataList: action.tableDataList });
    default:
      return state;
  }
}

export function queryFilterConditions(state = initFilterConditions, action) {
  switch (action.type) {
    case EVENT_TYPE:
      return Object.assign({}, state, { eventType: action.eventType });
    case EVENT_STATUS:
      return Object.assign({}, state, { eventStatus: action.eventStatus });
    case KEY_NAME:
      return Object.assign({}, state, { keyName: action.keyName });
    case TIME_RANGE:
      return Object.assign({}, state, { timeRange: action.timeRange });
    case MANAGEMENT_PAGE_NUMBER:
    console.log(action.pageNumber,'action.pageNumber===========reducer')
      return Object.assign({}, state, { pageNumber: action.pageNumber });
    case INITIATOR_NAME:
      return Object.assign({}, state, { initiatorName: action.initiatorName });
    case SOURCE:
      return Object.assign({}, state, { source: action.source });
    default:
      return state;
  }
}

export function queryEventCode(state = initEventCode, action) {
  switch (action.type) {
    case EVENT_CODE:
      return Object.assign({}, state, { eventCode: action.eventCode });
    default:
      return state;
  }
}

export function queryEventDetailSource(state = initEventDetailSource, action) {
  switch (action.type) {
    case EVENT_DETAIL_SOURCE:
      return Object.assign({}, state, {
        eventDetailSource: action.eventDetailSource
      });
    default:
      return state;
  }
}

export function queryAllEventDetail(state = initAllEventDetail,action) {
  switch (action.type) {
    case ALL_EVENT_DETAIL:
      return Object.assign({}, state, {
        allEventDetail: action.allEventDetail
      });
    default:
      return state;
  }
}

export function queryAuditedCount(state = initAuditedCount,action) {
  switch (action.type) {
    case AUDITED_COUNT:
    return Object.assign({}, state, {
      auditedCount: action.auditedCount
    });
  default:
    return state;
  }
}