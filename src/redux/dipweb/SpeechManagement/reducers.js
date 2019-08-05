import * as type from './action-type';

//push渠道页

const channelPushInitState = {
  pushTerminalType: { value: 'SNYG' },
  pushStyle: { value: '0' },
  title: { value: '' },
  content: { value: '' },
  pageId: { value: '' },
  messageTerminal: { value: 'SNYG' },
  appStyle: { value: '5' },
  mmsTemplate: { value: 'IMP_R_1002' },
  couponResource: { value: [] },
  voucherType: { value: '00' },
  passWordPageType: { value: '1' }
};

export const channelPushState = (state = channelPushInitState, action) => {
  switch (action.type) {
    case type.CHANNEL_PUSH:
      return { ...state, ...action.payload };
    case type.CHANNEL_PUSH_RESET:
      return channelPushInitState
    default:
      return state;
  }
};

export const channelMessageState = (state = channelMessageInitState, action) => {
  switch (action.type) {
    case type.CHANNEL_MESSAGE:
      return { ...state, ...action.payload };
    case type.CHANNEL_MESSAGE_RESET:
      return channelMessageInitState
    default:
      return state;
  }
};

