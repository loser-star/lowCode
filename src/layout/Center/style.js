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
    position: relative;
    width: 320px;
    height: 500px;
    border: solid 1px #dddddd;
    box-shadow: #ccc 1px 1px 20px;
    background-color: #fff;
  }
`
