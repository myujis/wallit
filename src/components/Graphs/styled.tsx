import styled from "styled-components";

export const Root = styled.div`
  width: 850px;
  height: 350px;
  background: rgba(209, 209, 209, 0.4);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  position: relative;
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

export const Body = styled.div`
  width: calc(100% - 10px - 10px);
  height: calc(100% - 65px - 20px);
  background: white;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  user-select: none;
`;
