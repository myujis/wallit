import styled from "styled-components";

export const Root = styled.div`
  width: 300px;
  height: 280px;
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
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  width: auto;
  font-weight: 500;
  font-size: 1.4em;
  color: white;
  &::before {
    height: 5px;
    width: 43%;
    content: "";
    position: absolute;
    bottom: 5px;
    background-color: #38e86a;
  }
`;

export const Body = styled.div`
  height: calc(100% - 85px);
  width: 280px;
  background: #ffffff;
  border-radius: 10px;
  margin: 10px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  user-select: none;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Limit = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
`;
export const Text = styled.span`
  position: absolute;
  left: 0;
  margin: 10px;
  font-size: 0.9em;
`;
export const Total = styled.span`
  color: #38e86a;
  font-weight: bold;
  font-size: 1.5em;
  position: absolute;
  right: 0;
  margin: 10px;
`;

export const Divider = styled.div`
  width: 80%;
  height: 1px;
  position: absolute;
  top: 70px;
  background-color: rgba(209, 209, 209);
`;

export const Container = styled.div`
  height: calc(100% - 35%);
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Description = styled.div`
  font-size: 1em;
  font-weight: 600;
  margin: 10px;
  position: absolute;
  bottom: 80px;
`;

export const Number = styled.div`
  color: #38e86a;
  font-weight: bold;
  font-size: 2.5em;
  position: absolute;
  bottom: 40px;
`;

export const AvailableBar = styled.div`
  width: 25%;
  height: 20px;
  border-radius: 20px;
  background-color: #38e86a;
  position: absolute;
  left: 0px;
  z-index: 1;
`;

export const TotalBar = styled.div`
  height: 20px;
  width: 80%;
  margin: 10px;
  border-radius: 20px;
  background-color: rgba(209, 209, 209, 1);
  position: absolute;
  bottom: 10px;
  z-index: 0;
`;
