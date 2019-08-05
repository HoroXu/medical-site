import {
  DELIVERY_CHANNEL_CHANNEL_TYPE,
  DELIVERY_CHANNEL_TYPE_RESET,
} from "../actions";

const initState = {
  channelType: "",
  isShowHome: false,
  isShowCart: false,
  isShowMessage: false,
  isShowPush: false,
  isShowMail: false
};

export const createChannelType = (number,payload) => {
  return{
    type:DELIVERY_CHANNEL_CHANNEL_TYPE,
    number:number,
    payload:payload,
  }
}

export const resetChannelType = () => {
  return {
    type: DELIVERY_CHANNEL_TYPE_RESET
  };
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case DELIVERY_CHANNEL_CHANNEL_TYPE: {
      switch (action.number) {
        case 1: {
          return {
            ...state,
            channelType: action.payload
          };
        }
        case 2: {
          return {
            ...state,
            isShowHome: action.payload
          };
        }
        case 3: {
          return {
            ...state,
            isShowCart: action.payload
          };
        }
        case 4: {
          return {
            ...state,
            isShowMessage: action.payload
          };
        }
        case 5: {
          return {
            ...state,
            isShowPush: action.payload
          };
        }
        case 6: {
          return {
            ...state,
            isShowMail: action.payload
          };
        }
      }
    }
    case DELIVERY_CHANNEL_TYPE_RESET: {
      return {
        ...initState
      };
    }
    default: {
      return state;
    }
  }
}
