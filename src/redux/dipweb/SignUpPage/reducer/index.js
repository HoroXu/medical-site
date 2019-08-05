import { combineReducers } from "redux";
import channels from "./deliveryChannel";
import {
  stepStatus,
  selectedDate,
  queryDayVal,
  queryGoodsList,
  queryIndex,
  queryCode,
  queryBuyTime,
  queryArr,
  querySeqNo,
  queryPageInfo,
  queryRange,
  queryCurrent,
  queryPageHistoryData,
  changeRefreshTable,
  changePageParam,
  spinParam,
  queryScrollVal,
  allSelectInfo,
  allSelectParam,
  commitParam
} from "./cartMarket";
import deliverySettingStatus from "./deliverySetting";
import shoppingCartLineGlobal from "./globalEventCode";
import coreShoppingLine from "./coreShoppingLine";
import submitSuccess from "./submit";
// import warn from './warn';
import number from "./number";
import channelType from "./channelType";
// import searchRedVnvolopeStatus from "./SearchRedVnvolope";
// import buyerRecallEdit from "./buyerRecallEdit"
import {
  queryTabActiveKey,
  queryTableDataList,
  queryFilterConditions,
  queryEventCode,
  queryEventDetailSource,
  queryAllEventDetail,
  queryAuditedCount
} from "./marketingManagement.js";

// import {
//   smartRecommendState,
//   smartRecommendData,
//   smartRecommendIndex
// } from "./smartRecommend";
// import realTimeMarketing from "./realTimeMarketing/index.js";
// import { userInfo, goods, standbrandList } from "./global";
import {
  allSelectedInfo,
  selectedRowKeys,
  selectParam,
  realSelectList,
  brandList,
  singleGoodsInfo,
  showBrandsMore,
  showGoodsMore,
  searchVal,
  searchArr,
  selectedAllKey
} from "./realTimeMarketing.js";
// import { eventChannelInfo ,dataDetailInfo,monitorEventCodeInfo,monitorEventTypeInfo,rangeDate,analysisData,rangeTime} from "./marketingEventInfo";

export default combineReducers({
  stepStatus,
  selectedDate,
  channels,
  queryDayVal,
  queryGoodsList,
  queryIndex,
  queryCode,
  queryBuyTime,
  queryArr,
  querySeqNo,
  queryPageInfo,
  queryRange,
  queryCurrent,
  commitParam,
  queryPageHistoryData,
  deliverySettingStatus,
  shoppingCartLineGlobal,
  coreShoppingLine,
  submitSuccess,
  number,
  channelType,
  changeRefreshTable,
  changePageParam,
  spinParam,
  // searchRedVnvolopeStatus,
  queryTabActiveKey,
  queryTableDataList,
  queryFilterConditions,
  queryEventCode,
  queryEventDetailSource,
  queryAllEventDetail,
  queryAuditedCount,
  queryScrollVal,
  // smartRecommendState,
  // realTimeMarketing,
  allSelectedInfo,
  selectedRowKeys,
  // smartRecommendData,
  // userInfo,
  selectParam,
  realSelectList,
  brandList,
  // goods,
  // standbrandList,
  allSelectInfo,
  allSelectParam,
  // smartRecommendIndex,
  singleGoodsInfo,
  showBrandsMore,
  showGoodsMore,
  searchVal,
  searchArr,
  // eventChannelInfo,
  // dataDetailInfo,
  // monitorEventCodeInfo,
  // monitorEventTypeInfo,
  // rangeDate,
  // analysisData,
  // rangeTime,
  // selectedAllKey,
  // buyerRecallEdit
});
