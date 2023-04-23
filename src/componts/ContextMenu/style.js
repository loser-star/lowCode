import styled from "styled-components";

export const LeftStyleDiv = styled.div`
  position: absolute;
 z-index: 9999;

  max-height: 410px;
  // border: solid 1px wheat;
  box-shadow: 0 2px 10px hsl(0deg 20% 85% / 1);
  background: hsla(0, 0%, 100%, 0.94);
  border-radius: 4px;
  text-align: left;
  min-width: 80px;
  font-size: 12px;
  transform-origin: 50% 0;
  opacity: 0.9;
  .item {
    line-height: 30px;
    padding: 10px 4px;
    background-color: white;
    cursor: default;
    &:hover {
      background-color: #0057ff;
      color: #fff;
      cursor: pointer;
    }
    border-bottom: 1px solid #e4e9ee;
  }
  .desc {
    font-weight: bold;
  }

  .thumbnail {
    overflow: hidden;
    text-align: center;
  }
`