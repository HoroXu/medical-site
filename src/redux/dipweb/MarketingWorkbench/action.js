import * as type from './action-type';

// export const stepCreator = index => {
//   return {
//     type:type.STEP,
//     payload:index,
//   };
// };

export const queryPlusPurchaseTabel = val => {
  return {
    type: type.PLUS_PURCHASE_TABLE,
    plusPurchaseTabel:val
  }
}