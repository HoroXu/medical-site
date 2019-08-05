import {
  //push配置
  PRAISE_MODAL_FORM_DATA,
  SALES_MODAL_FORM_DATA,
  COUPONS_MODAL_FORM_DATA,
  PRAISE_MODAL_FORM_STATUS,
  SALES_MODAL_FORM_STATUS,
  COUPONS_MODAL_FORM_STATUS,
  //消息中心配置
  CENTER_PRAISE_MODAL_FORM_DATA,
  CENTER_SALES_MODAL_FORM_DATA,
  CENTER_COUPONS_MODAL_FORM_DATA,
  CENTER_PRAISE_MODAL_FORM_STATUS,
  CENTER_SALES_MODAL_FORM_STATUS,
  CENTER_COUPONS_MODAL_FORM_STATUS,
  BUYER_RECALL_DATA,
  HIT_CATEGORYS,
  HISTORY_DATA,

  //提交弹框标记

  SUBMIT_FLAG
} from "./index";

//push配置
export const queryPraiseModalFormData = value => {
  // console.log(value, "actions==========queryPraiseModalFormData=========");
  return {
    type: PRAISE_MODAL_FORM_DATA,
    payload: value
  };
};
export const querySalesModalFormData = value => {
  return {
    type: SALES_MODAL_FORM_DATA,
    payload: value
  };
};
export const queryCouponsModalFormData = value => {
  console.log(value, "actions==========优惠券action=========");
  return {
    type: COUPONS_MODAL_FORM_DATA,
    payload: value
  };
};

export const queryPraiseModalFormStatus = value => {
  // console.log(value, "queryPraiseModalFormStatus=========");
  return {
    type: PRAISE_MODAL_FORM_STATUS,
    praiseModalFormStatus: value
  };
};

export const querySalesModalFormStatus = value => {
  return {
    type: SALES_MODAL_FORM_STATUS,
    salesModalFormStatus: value
  };
};

export const queryCouponsModalFormStatus = value => {
  return {
    type: COUPONS_MODAL_FORM_STATUS,
    couponsModalFormStatus: value
  };
};

//消息中心配置
export const queryCenterPraiseModalFormData = value => {
  return {
    type: CENTER_PRAISE_MODAL_FORM_DATA,
    payload: value
  };
};
export const queryCenterSalesModalFormData = value => {
  return {
    type: CENTER_SALES_MODAL_FORM_DATA,
    payload: value
  };
};
export const queryCenterCouponsModalFormData = value => {
  return {
    type: CENTER_COUPONS_MODAL_FORM_DATA,
    payload: value
  };
};

export const queryCenterPraiseModalFormStatus = value => {
  return {
    type: CENTER_PRAISE_MODAL_FORM_STATUS,
    centerPraiseModalFormStatus: value
  };
};

export const queryCenterSalesModalFormStatus = value => {
  return {
    type: CENTER_SALES_MODAL_FORM_STATUS,
    centerSalesModalFormStatus: value
  };
};

export const queryCenterCouponsModalFormStatus = value => {
  return {
    type: CENTER_COUPONS_MODAL_FORM_STATUS,
    centerCouponsModalFormStatus: value
  };
};

//买家召回主页设置

export const queryBuyerRecallData = value => {
  return {
    type: BUYER_RECALL_DATA,
    payload: value
  };
};

//开放品类

export const queryCategorys = value => {
  return {
    type: HIT_CATEGORYS,
    hitCategorys: value
  };
};

//查询历史数据

export const queryHistoyData = value => {
  return {
    type: HISTORY_DATA,
    historyData: value
  };
};

//提交成功弹框表单标记

export const querySubmitFlag = value => {
  return {
    type:SUBMIT_FLAG,
    submitFlag: value
  }
}

