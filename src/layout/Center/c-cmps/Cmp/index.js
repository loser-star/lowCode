import React, { Component } from "react";
import { CanvasContext } from "@/hooks";
import { CmpDiv } from "./styled";

import classNames from "classnames";
// todo 拖拽、删除、改变层级关系等

import Text from "@/componts/Text";
import Image from "@/componts/Image";
export default class Cmp extends Component {
  static contextType = CanvasContext;

  onDragStart = (e) => {
    this.setSelected(e);

    // 拖拽的开始位置
    const startX = e.pageX;
    const startY = e.pageY;

    e.dataTransfer.setData("text", startX + "," + startY);
  };

  setSelected = (e) => {
    e.stopPropagation()
    this.context.setSelectedCmpIndex(this.props.index);
  };
  onMouseDown = (e) => {
    const direction = e.target.dataset.direction;
    if (!direction) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();

    let startX = e.pageX;
    let startY = e.pageY;

    const { cmp } = this.props;
    const move = (e) => {
      const x = e.pageX;
      const y = e.pageY;

      let disX = x - startX;
      let disY = y - startY;

      // style top left width height
      let newStyle = {};
      // todo top left
      if (direction) {
        if (direction.indexOf("top") >= 0) {
          disY = 0 - disY;
          newStyle.top = cmp.style.top - disY;
        }

        if (direction.indexOf("left") >= 0) {
          disX = 0 - disX;
          newStyle.left = cmp.style.left - disX;
        }
      }

      const newHeight = cmp.style.height + disY;
      Object.assign(newStyle, {
        width: cmp.style.width + disX,
        height: newHeight,
      });

      if (cmp.style.fontSize) {
        // 文本组件的行高、字体大小跟着高度变化
        const n = newHeight / cmp.style.height;
        let newFontSize = n * cmp.style.fontSize;
        newFontSize =
          newFontSize < 12 ? 12 : newFontSize > 130 ? 130 : newFontSize;
        Object.assign(newStyle, {
          lineHeight: newHeight + "px",
          fontSize: newFontSize,
        });
      }

      Object.assign(newStyle, {
        width: cmp.style.width + disX,
        height: cmp.style.height + disY,
      });

      this.context.updateSelectedCmp(newStyle);

      startX = x;
      startY = y;
    };

    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };


  rotate = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const {style} = this.props.cmp;
    const {width, height, transform} = style;
    const trans = parseFloat(transform);

    const r = height / 2;

    const ang = ((trans + 90) * Math.PI) / 180;

    const [offsetX, offsetY] = [-Math.cos(ang) * r, -Math.sin(ang) * r];

    let startX = e.pageX + offsetX;
    let startY = e.pageY + offsetY;

    const move = (e) => {
      let x = e.pageX;
      let y = e.pageY;

      let disX = x - startX;
      let disY = y - startY;

      let deg = (360 * Math.atan2(disY, disX)) / (2 * Math.PI) - 90;

      deg = deg.toFixed(2);

      this.context.updateSelectedCmp({
        transform: deg,
      });
    };

    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);

  }

  


  render() {
    const { cmp, selected } = this.props;
    const { style, value } = cmp;
    const { width, height } = style;
    const transform = `rotate(${style.transform}deg)`;
    return (
      <CmpDiv
        draggable="true"
        onDragStart={this.onDragStart}
        onClick={this.setSelected}
      >
        {/* 组件本身 */}
        <div className="cmp" style={{...style,transform}}>
          {getCmp(cmp)}
        </div>

        {/* 组件的功能、选中的样式 */}
        <ul
          className={classNames(
            "editStyle",
            selected ? "selected" : "unselected"
          )}
          style={{
            top: style.top - 2,
            left: style.left - 2,
            width: style.width,
            height: style.height,
          }}
          onMouseDown={(e) => this.onMouseDown(e)}
        >
          <li
            className="stretchDot"
            style={{ top: -8, left: -8 }}
            data-direction="top, left"
          />

          <li
            className="stretchDot"
            style={{
              top: -8,
              left: width / 2 - 8,
            }}
            data-direction="top"
          />

          <li
            className="stretchDot"
            style={{ top: -8, left: width - 8 }}
            data-direction="top right"
          />

          <li
            className="stretchDot"
            style={{ top: height / 2 - 8, left: width - 8 }}
            data-direction="right"
          />

          <li
            className="stretchDot"
            style={{
              top: height - 8,
              left: width - 8,
            }}
            data-direction="bottom right"
          />

          <li
            className="stretchDot"
            style={{
              top: height - 8,
              left: width / 2 - 8,
            }}
            data-direction="bottom"
          />

          <li
            className="stretchDot"
            style={{
              top: height - 8,
              left: -8,
            }}
            data-direction="bottom left"
          />

          


          <li
            className="stretchDot"
            style={{
              top: height / 2 - 8,
              left: -8,
            }}
            data-direction="left"
          />

<li
            className={classNames('rotate', "iconfont icon-xuanzhuan")}
            style={{
              top: height + 8,
              left: width / 2 - 8,
            }}
            onMouseDown={this.rotate}
          />

        </ul>
      </CmpDiv>
    );
  }
}


function getCmp(cmp) {
  switch (cmp.type) {
    case "text":
      return <Text {...cmp}></Text>;
    case "image":
      return  <Image {...cmp}></Image>
    default:
     break;
  }
}
