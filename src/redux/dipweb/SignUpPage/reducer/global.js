import { USER_INFO, GOODS, STAND_BRAND } from "@/redux/actions";

export const userInfo = (state = {}, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const goods = (state = { id: "", name: "",beginDate : '',endDate :'' }, action) => {
  switch (action.type) {
    case GOODS:
      return { ...state, ...action.payload };
    default:
      return state
  }
};

export const standbrandList = (state = [],action) => {
    switch (action.type) {
        case STAND_BRAND:
            return action.payload
        default:
            return state;
    }
};
