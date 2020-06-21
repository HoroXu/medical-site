import React, { useState, useEffect } from "react";
import { history } from "react-router-dom";
import { Input, Button, message } from "antd";
import AxiosData from "@/utils/axios";
import "./index.less";

const LoginPage = (props) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  //获取用户名
  const queryUserName = (e) => {
    const { value } = e.target;
    setUserName(value);
  };

  //获取密码
  const queryPassWord = (e) => {
    const { value } = e.target;
    setPassWord(value);
  };

  //登录接口
  const loginFn = () => {
    console.log(userName, passWord,'登录====')
    AxiosData.get("ffn-web/login.htm", {
      userCode: userName,
      passwd: passWord,
    })
      .then((res) => {
        console.log(res, "登陆借口===");
        if (res.status == 200) {
          props.history.push("/hisPage");
        } else {
          message.error(res.msg);
        }
      })
      .catch((err) => {
        message.error(err);
      });
  };
  return (
    <div className="login-page">
      <div className="flex-item">
        <div className="item-title">登录名：</div>
        <Input onChange={queryUserName} style={{ width: 300 }} />
      </div>
      <div className="flex-item mt20">
        <div className="item-title">密码：</div>
        <Input.Password style={{ width: 300 }} onChange={queryPassWord} />
      </div>

      <div className="button-area">
        <Button type="primary" className="mt20" onClick={loginFn}>
          登录
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
