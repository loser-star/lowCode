import styled from "styled-components";

export const LeftStyleDiv = styled.div`
margin-left:20px;
display: flex;
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