import React, { Component, useState, useEffect } from "react";
import "./index.less";
import { Link } from "react-router-dom";
import { Input, Menu, Pagination } from "antd";
import AxiosData from "@/utils/axios";
const { SubMenu } = Menu;
const { Search } = Input;

const HisPage = () => {
  const [menuData, setMenuData] = useState([]);
  const [bookInfo, setBookInfo] = useState({});
  const [typeId, setTypeId] = useState("");
  const [classId, setClassId] = useState("");
  const [totalPage, setTotalPage] = useState(0);

  const [page, setPage] = useState(0);
  const [keyWord, setKeyWord] = useState("");

  //获取侧边栏列表
  function queryList() {
    AxiosData.get("list.do")
      .then(res => {
        console.log(res, "打印出列表======");
        setMenuData(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  //   handleClick = e => {
  //     // console.log("click ", e);
  //     this.setState({
  //       current: e.key
  //     });
  //   };
  //全部查询

  //   function querySearch(keyWord) {
  //     AxiosData.get("queryBookByKeyWord.do", {
  //       keyWord: keyWord,
  //       typeId: "",
  //       classId: "",
  //       currentPage: 1
  //     })
  //       .then(res => {
  //         console.log(res, "全部查询打======");
  //         setBookInfo(res);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }

  //   function queryPage(page) {
  //     console.log(page);
  //     // const { typeId, classId } = this.state;
  //     queryBooks(typeId, classId, page);
  //   }

  //查询具体书名

  function queryBooks(keyWord, typeId, classId, page) {
    console.log(keyWord, typeId, classId, page, "变换页码======");
    setTypeId(typeId);
    setClassId(classId);
    setPage(page);
    AxiosData.get("queryBookByKeyWord.do", {
      keyWord: keyWord,
      typeId: typeId,
      classId: classId,
      currentPage: page
    })
      .then(res => {
        console.log(res, "打印具体书======");
        setBookInfo(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    queryList();
    // querySearch();
  }, []);

  useEffect(() => {
    queryBooks(keyWord, typeId, classId, page);
    // querySearch();
  },[]);

  return (
    <div className="his-page">
      <Search
        placeholder="各类学科类图书检索"
        className="search-input"
        enterButton="搜索"
        onSearch={() => {
          setKeyWord(value), setPage(1);
        }}
      />
      <div className="content-area">
        <div className="menu-area">
          <div className="result-static">
            找到<span className="result-num">{bookInfo.totalRows || 0}</span>
            条结果。
          </div>
          <Menu
            // onClick={this.handleClick}
            style={{ width: 256 }}
            defaultOpenKeys={["sub1"]}
            // selectedKeys={[this.state.current]}
            mode="inline"
          >
            {menuData.length > 0 &&
              menuData.map((item, index) => {
                return (
                  <SubMenu
                    key={item.typeId}
                    title={<span>{item.typeName}</span>}
                  >
                    {item.children !== null &&
                      item.children.map((item, index) => {
                        return (
                          <SubMenu
                            key={item.id}
                            title={<span>{item.typeName}</span>}
                          >
                            {item.children !== null &&
                              item.children.map((item, index) => {
                                return (
                                  <Menu.Item
                                    key={item.id}
                                    onClick={() =>
                                      this.queryBooks(
                                        item.typeId,
                                        item.classId,
                                        1
                                      )
                                    }
                                  >
                                    {item.typeName}
                                  </Menu.Item>
                                );
                              })}
                            <Menu.Item kkey={item.id}>
                              {item.typeName}
                            </Menu.Item>
                          </SubMenu>
                        );
                      })}
                  </SubMenu>
                );
              })}
          </Menu>
        </div>
        <div className="right-area">
          <div className="record-item-list">
            {bookInfo.rowList && bookInfo.rowList.length === 0 ? (
              <div className="none-data">暂无数据</div>
            ) : null}
            {bookInfo.rowList &&
              bookInfo.rowList.length > 0 &&
              bookInfo.rowList.map((item, index) => {
                return (
                  <div className="record-item">
                    <div className="left-record">
                      <div className="record-title">
                        <span className="index">{index + 1}</span>
                        <Link
                          to={`/hisDetail/${item.bookId}`}
                          className="title"
                        >
                          {/* <span onClick={() => this.routerTo(item.bookId)}> */}
                          {item.bookName}
                          {/* </span> */}
                        </Link>
                        <span className="cited" />
                      </div>
                      <div className="record-subtitle">
                        <a href="javascript:;">{item.publisher}</a>
                        <a className="creator" href="javascript:;">
                          {item.addDate}
                        </a>
                        <a className="creator" href="javascript:;">
                          {item.bn || "ISBN"}
                        </a>
                        <a className="creator" href="javascript:;">
                          {item.author}
                        </a>
                      </div>
                      <div className="record-desc">{item.content}</div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Pagination
            className="pagination-area"
            total={bookInfo.totalPage}
            showTotal={total => `共 ${total} 记录`}
            pageSize={10}
            defaultCurrent={1}
            hideOnSinglePage={true}
            // onChange={() => this.queryBooks(typeId, classId, page)}
            onChange={() => setPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default HisPage;
