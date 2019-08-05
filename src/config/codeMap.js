export const GROUP_MANAGE_STATUS = new Map()
  .set("0", "未计算")
  .set("1", "计算中")
  .set("2", "计算成功")
  .set("3", "计算失败");

//新建活动
export const SEND_TYPE = new Map().set("0", "定时发送").set("1", "立即发送");

export const IS = new Map().set("0", "否").set("1", "是");

export const CUPNOTICETYPE = new Map()
  .set("0", "先排重后发券")
  .set("1", "先发券后排重")
  .set("2", "仅发券")
  .set("3", "发券+消息推送");

export const PassWordPageType = new Map().set("1", "H5").set("2", "原生页");

export const CUST_TYPE = new Map()
  .set("0", "智能场景")
  .set("1", "智能场景")
  .set("2", "标签筛选")
  .set("3", "自定义导入")
  .set("4", "页面域")
  .set("5", "商品域")
  .set("6", "组合客群")
  .set("7", "自助筛选");

export const ABTEST = new Map().set("0", "不配置").set("1", "基础版");

export const CHANNELS = new Map()
  .set("PUSH", "PUSH")
  .set("SMS", "短信")
  .set("MMS", "站内信")
  .set("EMAIL", "邮件")
  .set("APP", "消息中心")
  .set("COMMAND", "口令短信")
  .set("VOUCHER", "领券弹框");
export const GroupStatus = new Map()
  .set("00", "未执行")
  .set("12", "执行中")
  .set("20", "执行成功")
  .set("31", "执行失败");

export const TaskStatus = new Map()
  .set("00", "等待发送")
  .set("01", "正在发送")
  .set("02", "发送完成")
  .set("03", "发送失败")
  .set("04", "发送超时");

export const SceneCategory = new Map()
  .set("SZ001", "订单生命周期")
  .set("SZ002", "会员生命周期")
  .set("SZ003", "专属人群营销")
  .set("SZ004", "会员情感维系");

export const Normal_Push_Status = new Map()
  .set("0", "全部状态")
  .set("1", "草稿")
  .set("2", "创建完成")
  .set("3", "AB测试中")
  .set("4", "正式发送中")
  .set("5", "正式发送完成")
  .set("6", "等待发送中")
  .set("7", "活动修改")
  .set("8", "已取消");

export const Normal_Push_Device = new Map()
  .set("", "全部设备")
  .set("1", "Iphone")
  .set("3", "IPad")
  .set("2", "Android phone")
  .set("4", "pad")
  .set("1,2", "Iphone&Android phone");

export const Label_Type = new Map().set("1", "设备标签").set("0", "会员标签");

export const APP_Type = new Map()
  .set("SNYG", "苏宁易购")
  .set("SNXDGK", "苏宁小店");

export const Activity_Theme = new Map()
  .set("10001", "大促玩法")
  .set("10002", "日促销玩法")
  .set("10003", "大促主站活动")
  .set("10004", "日促主站活动")
  .set("10005", "品类活动")
  .set("10006", "营销产品-拼购")
  .set("10007", "营销产品-抢购")
  .set("10008", "内容导购")
  .set("10000", "其他");
