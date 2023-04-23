import React from "react";
import classNames from "classnames";
import TextList from "@/componts/TextList";
import ImageList from "@/componts/imageList";
import TplSide from "@/componts/TplSide";
import GraphSide from "@/componts/GraphSide";
import { LeftStyleDiv } from "./style";
const Left = () => {
  const [isShow, setIsShow] = React.useState(0);
  const _setShowSide = (value) => {
    if (isShow === value) {
      setIsShow(0);
    } else {
      setIsShow(value);
    }
  };
  return (
    <LeftStyleDiv>
      <div className="menu">
        <ul>
          <li className={classNames("cmp", isShow === 1 ? "selected" : "")}>
            <i className={classNames("iconfont icon-wenben", "cmpIcon")} />
            <span
              onClick={(e) => {
                _setShowSide(1);
              }}
            >
              文本
            </span>
          </li>

          <li className={classNames("cmp", isShow === 2 ? "selected" : "")}>
            <i className={classNames("iconfont icon-tupian", "cmpIcon")} />
            <span
              onClick={(e) => {
                _setShowSide(2);
              }}
            >
              图片
            </span>
          </li>
          <li className={classNames("cmp", isShow === 3 ? "selected" : "")}>
            <i
              className={classNames(
                "iconfont icon-mobankuangjia-xianxing",
                "cmpIcon"
              )}
            />
            <span
              onClick={(e) => {
                _setShowSide(3);
              }}
            >
              模版
            </span>
          </li>
          <li className={classNames("cmp", isShow === 4 ? "selected" : "")}>
            <i className={classNames("iconfont icon-graphical", "cmpIcon")} />
            <span
              onClick={(e) => {
                _setShowSide(4);
              }}
            >
              图形
            </span>
          </li>
        </ul>
      </div>
      {isShow === 1 && <TextList></TextList>}
      {isShow === 2 && <ImageList></ImageList>}
      {isShow === 3 && <TplSide />}
      {isShow === 4 && <GraphSide />}
    </LeftStyleDiv>
  );
};

export default Left;
