import styled from "styled-components";

export const Root = styled.div`
  width: 450px;
  height: 500px;
  background: rgba(209, 209, 209, 0.4);
  border-radius: 10px;
  position: relative;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Input = styled.input`
  width: 60%;
  height: 10%;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  outline: none;
  background: #ffffff;
  margin: 20px;
  font-size: 1.1em;
`;

export const Button = styled.button`
  width: 60%;
  height: 10%;
  margin: 40px;
  background: #38e86a;
  border: none;
  outline: none;
  border-radius: 20px;
  text-decoration: none;
  color: #ffffff;
  transition: 0.25s ease-in-out;

  font-weight: 500;
  font-size: 1.3em;
  &:hover {
    background: #66ff92;
    cursor: pointer;
  }
`;

export const Title = styled.img`
  max-height: 80%;
  max-width: 80%;
  user-select: none;
  -webkit-user-drag: none;
  position: absolute;
  top: 0;
  margin: 20px;
`;
