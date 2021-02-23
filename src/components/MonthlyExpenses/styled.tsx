import styled from "styled-components";

export const Root = styled.div`
  width: 95%;
  height: 60%;
  background: rgba(209, 209, 209, 0.4);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Head = styled.div`
  width: 100%;
  height: 65px;
  position: absolute;
  top: 0;
  font-weight: 500;
  font-size: 1.4em;
  color: white;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    height: 5px;
    width: 40%;
    content: "";
    position: absolute;
    bottom: 5px;
    background-color: #38e86a;
  }
`;

export const ItemList = styled.div`
  width: 100%;
  height: calc(100% - 65px);
  display: inline-block;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;

  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
