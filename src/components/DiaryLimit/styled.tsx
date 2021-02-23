import styled from "styled-components";

export const Root = styled.div`
  width: 95%;
  height: 40%;
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
  width: calc(100% - 10px - 10px);
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
  justify-self:self-start;
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
  background-color: rgba(209, 209, 209,0.5);
`;

export const Container = styled.div`
  height: calc(100% - 35%);
  width: 80%;
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
`;

export const Number = styled.div`
  color: #38e86a;
  font-weight: bold;
  font-size: 2.5em;
`;

export const AvailableBar = styled.div`
  width: 25%;
  height: 20px;
  border-radius: 20px;
  background-color: #38e86a;
  z-index: 1;
`;

export const TotalBar = styled.div`
  height: 20px;
  width: 100%;
  margin: 10px;
  border-radius: 20px;
  background-color: rgba(209, 209, 209, 1);
  z-index: 0;
`;
