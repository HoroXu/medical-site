import * as type from "./action-type";

let initPlusPurchaseTabel = {
  plusPurchaseTabel: {}
};

// export const step = (state = { index: 1 }, action) => {
//   switch (action.type) {
//     case type.STEP:
//       return { index: action.payload };
//     default:
//       return state;
//   }
// };

export const plusPurchaseTabel = (state = initPlusPurchaseTabel, action) => {
  switch (action.type) {
    case type.PLUS_PURCHASE_TABLE:
      return { plusPurchaseTabel: action.plusPurchaseTabel };
    default:
      return state;
  }
};
