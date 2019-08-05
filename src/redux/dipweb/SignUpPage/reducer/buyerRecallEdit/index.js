import { combineReducers } from "redux";
import {
  praiseModalFormData,
  salesModalFormData,
  couponsModalFormData,
  praiseModalFormStatus,
  salesModalFormStatus,
  couponsModalFormStatus,
  centerPraiseModalFormData,
  centerSalesModalFormData,
  centerCouponsModalFormData,
  centerPraiseModalFormStatus,
  centerSalesModalFormStatus,
  centerCouponsModalFormStatus,
  buyerRecallData,
  hitCategorys,
  historyData,
  submitFlag
} from "./modalForm";

export default combineReducers({
  praiseModalFormData,
  salesModalFormData,
  couponsModalFormData,
  praiseModalFormStatus,
  salesModalFormStatus,
  couponsModalFormStatus,
  centerPraiseModalFormData,
  centerSalesModalFormData,
  centerCouponsModalFormData,
  centerPraiseModalFormStatus,
  centerSalesModalFormStatus,
  centerCouponsModalFormStatus,
  buyerRecallData,
  hitCategorys,
  historyData,
  submitFlag
});
