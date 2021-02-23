import styled from "styled-components";

export const Root = styled.div`
  width: 850px;
  height: 50%;
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
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;

  
`;

export const Container = styled.div`
  height:340px;
  display: flex;
  flex-direction:row;
  align-items: center;
  user-select: none;
  overflow-x:scroll;
  overflow-y:hidden;
  &::-webkit-scrollbar {
    height:10px;
  }

  &::-webkit-scrollbar-track {
    background: none; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(209, 209, 209, 0.1);
    border-radius: 20px;   
  }
  &:hover::-webkit-scrollbar-thumb{
    background-color: rgba(209, 209, 209, 0.7); 
  }
  &::-webkit-scrollbar-thumb:hover{
    background-color: rgba(180, 180, 180);

  }
`;

export const Title = styled.h1`
  font-size:6em;
  z-index:2;
  color:red;
`;