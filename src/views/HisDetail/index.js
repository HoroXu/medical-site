import React, { Component } from "react";
import "./index.less";
import { Link } from "react-router-dom";
import { Input, Menu, Icon, Pagination, Button, Tabs } from "antd";
import AxiosData from "@/utils/axios";
import Details from "../../assets/images/detail3.png";
const { Search } = Input;
const { TabPane } = Tabs;
export default class HisDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "1",
      detailData: ""
    };
  }

  //获取详情接口
  queryDetail = bookId => {
    AxiosData.get("/queryBookDetail.do", { bookId })
      .then(res => {
        console.log(res);
        this.setState({
          detailData: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    console.log(
      this.props.location.pathname,
      this.props.location.pathname.split("/"),
      "打印bookId===="
    );

    this.queryDetail(this.props.location.pathname.split("/")[2]);
  }
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    const { detailData } = this.state;
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
              <img src={Details} />
            </div>
            <div className="book-name">
              <div className="p1">{detailData.bookName}</div>
              <div className="p2">
                作者：<span>{detailData.author}</span>
              </div>
              <div className="p2">
                出版、发行者：<span>{detailData.publisher}</span>
              </div>
              <div className="p2">
                出版发行时间：<span>{detailData.addDate}</span>
              </div>
              <div className="p2">
                ISBN：<span>{detailData.bn}</span>
              </div>
              <Button
                type="primary"
                // href={`http://dzs.tlytsg.com/downLoad.do?bookId=${
                //   this.props.location.pathname.split("/")[2]
                // }`}
                href={`http://dzs.tlytsg.com/downLoad.do?bookId=124718
                }`}
              >
                点击下载
              </Button>
            </div>
          </div>
          <div className="det2">
            <Tabs onChange type="card">
              <TabPane tab="详细信息" key="1">
                <div className="detail-info-area">
                  <div className="p1">所有责任者： {detailData.author}</div>
                  <div className="p2">所有题名： {detailData.bookName}</div>
                  <div className="p2">标识号： ISBN :{detailData.bn}</div>
                  <div className="p2">
                    出版、发行者： {detailData.publisher}
                  </div>
                  <div className="p2">关键词：{detailData.seoKeyWord}</div>
                  <div className="p2">载体形态： 404页</div>
                </div>
              </TabPane>
              <TabPane tab="摘要" key="2">
                <div className="summary-area">
                  {detailData.content ? detailData.content : "暂无数据"}
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
