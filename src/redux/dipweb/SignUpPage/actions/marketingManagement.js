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
} from "./index";

export function queryTabActiveKey(val) {
  return {
    type: TAB_ACTIVE_KEY,
    tabActiveKey: val
  };
}

export function queryTableDataList(res) {
  return {
    type: TABLE_DATA_LIST,
    tableDataList: res
  };
}

export function queryEventType(eventType) {
  return {
    type: EVENT_TYPE,
    eventType
  };
}

export function queryEventStatus(eventStatus) {
  return {
    type: EVENT_STATUS,
    eventStatus
  };
}
export function queryKeyName(keyName) {
  return {
    type: KEY_NAME,
    keyName
  };
}

export function queryTimeRange(timeRange) {
  return {
    type: TIME_RANGE,
    timeRange
  };
}

export function queryManagementPageNumber(pageNumber) {
  console.log(pageNumber, "pageNumber============actions");
  return {
    type: MANAGEMENT_PAGE_NUMBER,
    pageNumber
  };
}
export function queryInitiatorName(initiatorName) {
  return {
    type: INITIATOR_NAME,
    initiatorName
  };
}
export function querySource(source) {
  return {
    type: SOURCE,
    source
  };
}

export function queryEventCode(eventCode) {
  return {
    type: EVENT_CODE,
    eventCode
  };
}

export function queryEventDetailSource(eventDetailSource) {
  console.log(eventDetailSource, "actions=======编辑");
  return {
    type: EVENT_DETAIL_SOURCE,
    eventDetailSource
  };
}

export function queryAllEventDetail(allEventDetail) {
  console.log(allEventDetail,'allEventDetail========actions')
  return {
    type: ALL_EVENT_DETAIL,
    allEventDetail
  };
}

export function queryAuditedCount(val) {
  return {
    type: AUDITED_COUNT,
    auditedCount: val
  };
}
