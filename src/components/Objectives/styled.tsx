import styled from "styled-components";

export const Root = styled.div`
  width: 300px;
  height: 280px;
  background: rgba(209, 209, 209, 0.4);
  border-radius: 10px;
  margin: 10px;
  display: inline-block;
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

export const Body = styled.div`
  width: 300px;
  height: calc(100%);
  background-color: #ffffff;
  border-radius: 10px;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const ImageContainer = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 138px;
  height: 108px;
  user-select: none;
  -webkit-user-drag: none;
  margin: 10px;
`;

export const Text = styled.span`
  font-weight: bolder;
  font-size: 1.4em;
  margin-right: 10px;
  user-select: none;
`;

export const Number = styled.span`
  color: #975edb;
  font-weight: bolder;
  font-size: 2.5em;
`;

export const Button = styled.button`
  width: 60%;
  height: 40px;
  background: #975edb;
  border: none;
  outline: none;
  border-radius: 20px;
  text-decoration: none;
  color: #ffffff;
  transition: 0.25s ease-in-out;

  font-weight: 500;
  font-size: 1.3em;
  &:hover {
    background: #a96af7;
    cursor: pointer;
  }
`;
