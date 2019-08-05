import * as type from './action-type';
import { listAddkey } from "@/utils/listAddkey";



export const queryChannelPush = value => {
  return {
    type: type.CHANNEL_PUSH,
    payload: value,
  };
};

export const queryChannelMessage = value => {
  return {
    type: type.CHANNEL_MESSAGE,
    payload: value,
  };
};
