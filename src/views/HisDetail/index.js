import React, { Component } from "react";
import "./index.less";
import { Link } from "react-router-dom";
import { Input, Menu, Icon, Pagination, Button, Tabs } from "antd";
const { Search } = Input;
const { TabPane } = Tabs;
export default class HisDetail extends Component {
  constructor(props, context) {
    super(props, context);
    console.info(props);
    state = {
      current: "1"
    };
    this.bookId = props.location.state.data;
  }

  componentDidMount() {
    console.log(this.bookId, "打印bookId====");
  }
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div className="his-detail">
        <div className="top-search">
          <div className="search-logo">
            图书检索 > <span>详情</span>
          </div>

          <Search
            className="search-area"
            placeholder="input search text"
            enterButton="检索"
            size="large"
            onSearch={value => console.log(value)}
          />
        </div>

        <div className="book-detail-area">
          <div className="det1">
            <div className="book-img">
              <img src="" />
            </div>
            <div className="book-name">
              <div className="p1">管理运筹学</div>
              <div className="p2">
                作者：<span>韩伯棠</span>
              </div>
              <div className="p2">
                出版、发行者：<span>高等教育出版社</span>
              </div>
              <div className="p2">出版发行时间：2000</div>
              <div className="p2">ISBN：7-04-007829-5</div>
              <Button type="primary">点击下载</Button>
            </div>
          </div>
          <div className="det2">
            <Tabs onChange type="card">
              <TabPane tab="详细信息" key="1">
                <div className="detail-info-area">
                  <div className="p1">所有责任者： 韩伯棠</div>
                  <div className="p2">所有题名： 管理运筹学</div>
                  <div className="p2">标识号： ISBN :7-04-007829-5</div>
                  <div className="p2">出版、发行者： 高等教育出版社</div>
                  <div className="p2">关键词：</div>
                  <div className="p2">载体形态： 404页</div>
                </div>
              </TabPane>
              <TabPane tab="摘要" key="2">
                <div className="summary-area">
                  本书第一版作为教育部“高等教育面向2l世纪教学内容和课程体系改革计划”的研究成果和“21世纪课程教材”于2000年出版，2005年进行了修订，出了第二版。该书2002年被教育部评为全国普通高等学校优秀教材一等奖，2004年被教育部管理科学与工程教学指导委员会推荐为该专业的本科核心课程教材，被教育部推荐为研究生教学用书。
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
