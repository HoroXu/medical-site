import * as type from "./action-type";
//保存客群列表
export const queryGroupManagementList = val => {
  return {
    type: type.GROUP_MANAGEMENT_LIST,
    groupManagementList: val
  };
};
export const queryGroupManagementListPage = val => {
  return {
    type: type.GROUP_MANAGEMENT_LIST_PAGE,
    groupManagementListPage: val
  };
};


export const queryGroupManagementInitiator = val => {
  return {
    type: type.GROUP_MANAGEMENT_INITIATOR,
    groupManagementInitiator:val
  }
}

export const queryGroupManagementType = val => {
  return {
    type: type.GROUP_MANAGEMENT_TYPE,
    groupManagementType:val
  }
}


export const queryGroupManagementTime = val => {
  return {
    type: type.GROUP_MANAGEMENT_TIME,
    groupManagementTime:val
  }
}
//保存客群id
export const queryGroupId = val => {
  return {
    type: type.GROUP_MANAGE_ID,
    groupManageId:val
  }
}


export const queryGroupEventStatus = val => {
  return {
    type: type.GROUP_EVENT_STATUS,
    groupEventStatus:val
  }
}


export const queryGroupEventValue = val => {
  return {
    type: type.GROUP_EVENT_VALUE,
    groupEventValue:val
  }
}
