import React, { Component } from "react";
import "./index.less";
export default class Bottom extends Component {
  state = {};
  render() {
    return (
      <div className="copy-right">
        <p>
          版权所有 上海第一医院 粤ICP备11064298号 "HospLibrary"版本号：4.0.0
        </p>
        <p>
          Copyright © 2009-2015 "HospLibrary".net Corporation,All Rights
          Reserved.
        </p>
      </div>
    );
  }
}
