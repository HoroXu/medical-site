module.exports = {
  "SUCCESS": {
    code: 200
    , desc: '成功'
  }
  , "NO_DATA": {
    code: 2
    , desc: '无数据'
  }
  , "RUNTIME_ERROR": {
    code: 1
    , desc: '执行失败！'
  }
  ,
  "NO_LOGIN": {
    code: 998
    , desc: '未登录'
  }
  , "PARAMS_ERR": {
    code: -8
    , desc: '参数错误'
  }
  , "REQUEST_ERR": {
    code: -9
    , desc: '-9 | sorry, request error.'
  }
  , "RATE_LIMIT": {
    code: -10
    , desc: '您好，已开启流量控制，请稍后再试。'
  }
  , "NOT_FOUND": {
    code: 404
    , desc: '404 | sorry, page not found.'
  }
  , "SERVER_ERR": {
    code: 500
    , desc: '500 | sorry, server error.'
  },
  "FAILURE": {
    code: -1, desc: 'failure'
  }
};
