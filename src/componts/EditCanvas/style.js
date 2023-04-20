import styled from "styled-components";

export const EditCanvasDiv = styled.div`
 display: inline-block;
  font-size: 12px;
  border-left: solid 1px #dddddd;
  .attribute {
    display: inline-block;
    margin-left: 7px;
  }
  .attributeIcon {
    display: inline-block;
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 200px;
    margin-top: 300px;
    font-size: 14px;
  }

  .title {
    line-height: 60px;
    border-bottom: solid 1px #ddd;
    text-align: center;
    background-color: #ffe331;
    height: 60px;
    font-size: 16px;
    color: #500202;
  }
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 8px 0;
    padding: 4px;
    margin-top: 30px;
  }
  label {
    width: 80px;
    color: #666;
  }
  .itemRight {
    margin-left: 10px;
    width: 250px;
    height: 38px;
    border-radius: 2px;
    border: 1px solid #d6dbe1;
  }
`;