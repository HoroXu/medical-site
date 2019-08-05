import * as type from "./action-type";

let initGroupManagementList = {
  groupManagementList: []
};
let initGroupManagementListPage = {
  groupManagementListPage: 1
};

let initGroupEventStatus = {
  groupEventStatus: ""
};

let initGroupManagementType = {
  groupManagementType: ""
};

let initGroupManagementTime = {
  groupManagementTime: ["", ""]
};

let initGroupManageId = {
  groupManageId: ""
};

let initGroupEventValue = {
  groupEventValue: ""
};

let initGroupManagementInitiator = {
  groupManagementInitiator:''
}

export const groupManagementList = (
  state = initGroupManagementList,
  action
) => {
  switch (action.type) {
    case type.GROUP_MANAGEMENT_LIST:
      return { groupManagementList: action.groupManagementList };
    default:
      return state;
  }
};
export const groupManagementListPage = (state = initGroupManagementListPage, action) => {
  switch (action.type) {
    case type.GROUP_MANAGEMENT_LIST_PAGE:
      return { groupManagementListPage: action.groupManagementListPage };
    default:
      return state;
  }
};

export const groupManagementInitiator = (state = initGroupManagementInitiator, action) => {
  switch (action.type) {
    case type.GROUP_MANAGEMENT_INITIATOR:
      return { groupManagementInitiator: action.groupManagementInitiator };
    default:
      return state;
  }
};

export const groupManagementType = (
  state = initGroupManagementType,
  action
) => {
  switch (action.type) {
    case type.GROUP_MANAGEMENT_TYPE:
      return { groupManagementType: action.groupManagementType };
    default:
      return state;
  }
};

export const groupManagementTime = (state = initGroupManagementTime, action) => {
  switch (action.type) {
    case type.GROUP_MANAGEMENT_TIME:
      return { groupManagementTime: action.groupManagementTime };
    default:
      return state;
  }
};

export const groupManageId = (state = initGroupManageId, action) => {
  switch (action.type) {
    case type.GROUP_MANAGE_ID:
      return { groupManageId: action.groupManageId };
    default:
      return state;
  }
};

export const groupEventStatus = (state = initGroupEventStatus, action) => {
  switch (action.type) {
    case type.GROUP_EVENT_STATUS:
      return { groupEventStatus: action.groupEventStatus };
    default:
      return state;
  }
};

export const groupEventValue = (state = initGroupEventValue, action) => {
  switch (action.type) {
    case type.GROUP_EVENT_VALUE:
      return { groupEventValue: action.groupEventValue };
    default:
      return state;
  }
};
