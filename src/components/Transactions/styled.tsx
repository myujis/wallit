import styled from "styled-components";

export const Root = styled.div`
  width: 300px;
  height: 650px;
  background: rgba(209, 209, 209, 0.3);
  border-radius: 10px;
  margin: 10px;
  display: inline-block;
  flex-direction: column;
  position: relative;
`;

export const Head = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
  font-weight: 500;
  font-size: large;
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
  height: 90%;
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

export const Item = styled.div`
  width: 280px;
  height: 70px;
  background: #ffffff;
  border-radius: 10px;
  margin: 10px;
  position: relative;
  transition: 0.2s ease-in-out;
  -webkit-box-shadow: 0px 13px 26px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 13px 26px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 13px 26px -3px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    -webkit-box-shadow: 0px 13px 26px -3px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 13px 26px -3px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 13px 26px -3px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const Info = styled.div`
  height: 70%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 1.4em;
  color: black;
`;

export const Type = styled.span`
  font-weight: 400;
  font-size: 1em;
  color: black;
`;

export const Number = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #38e86a;
  font-weight: bold;
`;
