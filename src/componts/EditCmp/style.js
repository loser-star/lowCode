import styled from 'styled-components';

export const EditWrapper = styled.div`
display: inline-block;
  width: 350px;
  border-left: solid 1px #dddddd;
  background-color: white;
  font-size: 12px;

  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 200px;
    margin-top: 300px;
    font-size: 14px;
  }

  .title {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    font-weight: 800;
    text-align: center;
    background: #ffe331;
  }
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 8px 0;
    margin-top: 15px;
    padding: 4px;
  }
  .item:first-child {
    margin-top: 30px;
  }
  label {
    width: 52px;
    color: #666;
  }
  .itemRight {
    margin-left: 10px;
    width: 250px;
    height: 38px;
    border-radius: 2px;
    border: 1px solid #d6dbe1;
  }
  .pouseAnimation {
    margin: 8px;
    padding: 10px;
    background-color: red;
    color: white;
    font-weight: bold;
  }
`;