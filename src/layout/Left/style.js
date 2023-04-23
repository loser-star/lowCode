import styled from "styled-components";

export const LeftStyleDiv = styled.div`
margin-left:20px;
display: flex;
img {
    width: 100%;
    height: 100%;
  }
.menu {
  border-right: 10px solid red;
  padding-right: 20px;
  ul{
    li{
      span{
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
}


  .cmps {
    width: 80px;
  }
  .cmp {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;

    &.selected,
    &:hover {
      color: #0057ff;
      .cmpIcon,
      .cmpText {
        color: #0057ff;
      }
    }
  }
  .cmpIcon {
    font-size: 20px;
    color: #181819;
  }
  // 文字
  .cmpText {
    font-size: 14px;
    color: #666;
  }
`