import styled from "styled-components";

export const HeaderStyleDiv = styled.div`
z-index: 22;
  width: 100%;
  height: 80px;
  color: #fff;
  background-color: #000;
  display: flex;
  justify-content:  space-between;
  align-items: center;
  flex-direction: row;
  

  .item {
    display: flex;
    padding: 0 20px;
    cursor: default;
    &:hover {
      background-color: #0057ff;
    }
    &.release {
      width: 100px;
      background-color: #0057ff;
      &:hover {
        background-color: #ffe331;
        span {
          color: black;
        }
      }
    }

    // .icon,
    // .txt {
    //   display: inline-block;
    // }

    .icon {
      font-size: 22px;
    }
    // .releaseIcon {
    // display: inline-block;
    // }

    // .txt {
    //   margin-left: 6px;
    //   font-size: 14px;
    // }
    .nextStep {
      display: inline-block;
      transform: rotateY(180deg);
    }
  }
`