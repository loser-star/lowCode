import styled from 'styled-components';

export const CmpDiv = styled.div`
position: absolute;

img {
  width: 100%;
  height: 100%;
}

.editStyle {
  box-sizing: content-box;
  position: absolute;
}

.unselected {
  border: solid 2px transparent;
  .stretchDot,
  .rotate {
    display: none;
  }
}
.selected {
  border: solid 2px #02dcf7;
}


.stretchDot {
  z-index: 9999;
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: rgba(0, 87, 255, 0.5);
  border-radius: 50%;
}

.rotate {
  z-index: 9999;
  position: absolute;
  color: rgba(0, 87, 255, 0.5);
  font-weight: bold;
  font-size: 24px;
}
`
