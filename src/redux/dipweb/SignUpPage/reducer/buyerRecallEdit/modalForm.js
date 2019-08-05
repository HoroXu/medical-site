import {
  PRAISE_MODAL_FORM_DATA,
  COUPONS_MODAL_FORM_DATA,
  SALES_MODAL_FORM_DATA,
  PRAISE_MODAL_FORM_STATUS,
  SALES_MODAL_FORM_STATUS,
  COUPONS_MODAL_FORM_STATUS,
  CENTER_PRAISE_MODAL_FORM_DATA,
  CENTER_COUPONS_MODAL_FORM_DATA,
  CENTER_SALES_MODAL_FORM_DATA,
  CENTER_PRAISE_MODAL_FORM_STATUS,
  CENTER_SALES_MODAL_FORM_STATUS,
  CENTER_COUPONS_MODAL_FORM_STATUS,
  BUYER_RECALL_DATA,
  HIT_CATEGORYS,
  HISTORY_DATA,
  SUBMIT_FLAG
} from "@/redux/actions";

const initPraiseModalFormData = {
  msgShowStyles: {
    value: "0"
  },
  msgShowTitle: {
    value: ""
  },
  msgShowCont: {
    value: ""
  }
  // pushPageType: {
  //   value: ""
  // }
};
const initSalesModalFormData = {
  msgShowStyles: {
    value: "0"
  },
  msgShowTitle: {
    value: ""
  },
  msgShowCont: {
    value: ""
  }
  // pushPageType: {
  //   value: ""
  // }
};
const initCouponsModalFormData = {
  msgShowStyles: {
    value: "0"
  },
  msgShowTitle: {
    value: ""
  },
  msgShowCont: {
    value: ""
  }
  // pushPageType: {
  //   value: ""
  // }
};

const initPraiseModalFormStatus = {
  praiseModalFormStatus: false
};
const initSalesModalFormStatus = {
  salesModalFormStatus: false
};
const initCouponsModalFormStatus = {
  couponsModalFormStatus: false
};

const initCenterPraiseModalFormData = {
  msgShowStyles: {
    value: "5"
  },
  msgShowTitle: {
    value: ""
  },
  msgShowCont: {
    value: ""
  },
  msgShowType: {
    value: ""
  }
};
const initCenterSalesModalFormData = {
  msgShowStyles: {
    value: "5"
  },
  msgShowTitle: {
    value: ""
  },
  msgShowCont: {
    value: ""
  },
  msgShowType: {
    value: ""
  }
};
const initCenterCouponsModalFormData = {
  msgShowStyles: {
    value: "5"
  },
  msgShowTitle: {
    value: ""
  },
  msgShowCont: {
    value: ""
  },
  msgShowType: {
    value: ""
  }
};
const initHitCategorys = {
  hitCategorys: []
};

const initCenterPraiseModalFormStatus = {
  centerPraiseModalFormStatus: false
};
const initCenterSalesModalFormStatus = {
  centerSalesModalFormStatus: false
};
const initCenterCouponsModalFormStatus = {
  centerCouponsModalFormStatus: false
};

const initBuyerRecallData = {
  userFatigue: { value: "" },
  exposureTime: { value: "" },
  couponQualityScore: { value: "" },
  intentionScore: { value: "" },
  isDetectDuplicate: { value: 0 },
  landingType: { value: 1 },
  landingSaleWordCraft: { value: "" },
  landingHighApprWordCraft: { value: "" },
  landingCouponWordCraft: { value: "" },
  landingSimilarGoodsNum: { value: "" },
  landingGuessLikeNum: { value: "" },
  landingPageUrl: { value: "" },
  tester: {
    value: [
      // {
      //   testerId: "79ec3e162b154eca92400c009fe0098a",
      //   name: "王立宇33",
      //   phone: "15161150931",
      //   email: "17092806@cnsuning.com",
      //   loginId: "11511599001",
      //   cmfUserId: "6122145431",
      //   key: "uuid155306906048841087c3d0"
      // }
    ]
  }
};

const initHistoryData = {
  historyData: {}
};

const initSubmitFlag = {
  submitFlag: false
};

//push渠道设置
export function praiseModalFormData(state = initPraiseModalFormData, action) {
  switch (action.type) {
    case PRAISE_MODAL_FORM_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export function salesModalFormData(state = initSalesModalFormData, action) {
  switch (action.type) {
    case SALES_MODAL_FORM_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export function couponsModalFormData(state = initCouponsModalFormData, action) {
  // console.log(action, "reducer=====优惠券+++++++++++");
  switch (action.type) {
    case COUPONS_MODAL_FORM_DATA:
      // state.msgShowTitle.value = "";
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function praiseModalFormStatus(
  state = initPraiseModalFormStatus,
  action
) {
  switch (action.type) {
    case PRAISE_MODAL_FORM_STATUS:
      return {
        ...state,
        praiseModalFormStatus: action.praiseModalFormStatus
      };
    default:
      return state;
  }
}

export function salesModalFormStatus(state = initSalesModalFormStatus, action) {
  switch (action.type) {
    case SALES_MODAL_FORM_STATUS:
      return {
        ...state,
        salesModalFormStatus: action.salesModalFormStatus
      };
    default:
      return state;
  }
}

export function couponsModalFormStatus(
  state = initCouponsModalFormStatus,
  action
) {
  switch (action.type) {
    case COUPONS_MODAL_FORM_STATUS:
      return {
        ...state,
        couponsModalFormStatus: action.couponsModalFormStatus
      };
    default:
      return state;
  }
}

//消息中心配置
export function centerPraiseModalFormData(
  state = initCenterPraiseModalFormData,
  action
) {
  // console.log(action, "reducer++++++++消息中心==好评+++++++++++");
  switch (action.type) {
    case CENTER_PRAISE_MODAL_FORM_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export function centerSalesModalFormData(
  state = initCenterSalesModalFormData,
  action
) {
  switch (action.type) {
    case CENTER_SALES_MODAL_FORM_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export function centerCouponsModalFormData(
  state = initCenterCouponsModalFormData,
  action
) {
  switch (action.type) {
    case CENTER_COUPONS_MODAL_FORM_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function centerPraiseModalFormStatus(
  state = initCenterPraiseModalFormStatus,
  action
) {
  switch (action.type) {
    case CENTER_PRAISE_MODAL_FORM_STATUS:
      return {
        ...state,
        centerPraiseModalFormStatus: action.centerPraiseModalFormStatus
      };
    default:
      return state;
  }
}

export function centerSalesModalFormStatus(
  state = initCenterSalesModalFormStatus,
  action
) {
  switch (action.type) {
    case CENTER_SALES_MODAL_FORM_STATUS:
      return {
        ...state,
        centerSalesModalFormStatus: action.centerSalesModalFormStatus
      };
    default:
      return state;
  }
}

export function centerCouponsModalFormStatus(
  state = initCenterCouponsModalFormStatus,
  action
) {
  switch (action.type) {
    case CENTER_COUPONS_MODAL_FORM_STATUS:
      return {
        ...state,
        centerCouponsModalFormStatus: action.centerCouponsModalFormStatus
      };
    default:
      return state;
  }
}

export function buyerRecallData(state = initBuyerRecallData, action) {
  switch (action.type) {
    case BUYER_RECALL_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function hitCategorys(state = initHitCategorys, action) {
  switch (action.type) {
    case HIT_CATEGORYS:
      return { ...state, hitCategorys: action.hitCategorys };
    default:
      return state;
  }
}

export function historyData(state = initHistoryData, action) {
  switch (action.type) {
    case HISTORY_DATA:
      return { ...state, historyData: action.historyData };
    default:
      return state;
  }
}

// 提交表单弹框标记

export function submitFlag(state = initSubmitFlag, action) {
  switch (action.type) {
    case SUBMIT_FLAG:
      return {
        ...state,
        submitFlag: action.submitFlag
      };
    default:
      return state;
  }
}
