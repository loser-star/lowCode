import styled from "styled-components";

export const SideWrapper = styled.div`
 z-index: 999;
  /* position: absolute;
  top: 80px;
  left: 80px; */
  width: 300px;
  /* height: 87%;*/
  padding: 20px 14px;
  overflow: scroll;
  /* box-shadow: #ccc 1px 1px 10px;
  background-color: white; */

  /*修改谷歌浏览器滚动条样式*/
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #30dad2;
    border-radius: 6px;
    -webkit-border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    border-radius: 6px;
    -webkit-border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    width: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    border-radius: 6px;
    -webkit-border-radius: 6px;
  }

  .box {
    width: 250px;
    .item {
      display: inline-block;
      width: 120px;
      height: 120px;
      line-height: 120px;
      overflow: hidden;
      margin: 10px 0;
      border: solid 1px #ddd;
      text-align: center;
      font-size: 20px;
      &:nth-of-type(odd) {
        margin-right: 10px;
      }
      &:hover {
        font-weight: bold;
        color: orange;
        border-color: orange;
      }

      .desc {
        line-height: 20px;
        font-size: 12px;
        color: #666;
      }
    }
  }

`