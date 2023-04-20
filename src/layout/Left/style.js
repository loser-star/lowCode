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
`