import styled from 'styled-components';

export const CenterDiv = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 100%;
  padding-top: 20px;
  text-align: center;
  background-color: rgba(240, 243, 247, 1);
  .canvas {
    z-index: 999;
    position: relative;
    width: 320px;
    height: 500px;
    border: solid 1px #dddddd;
    box-shadow: #ccc 1px 1px 20px;
    background-color: #fff;
  }



  .zoom {


    position: fixed;
    right: 400px;
    bottom: 20px;

    display: flex;
    height: 30px;
    line-height: 30px;
    color: #500202;

    li {
      padding: 0 4px;
    }
    .icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #ffe331;
      cursor: pointer;
    }
    .num {
      font-size: 12px;
      input {
        display: inline-block;
        width: 50px;
        border: none;
        text-align: center;
      }
    }
  }
`
