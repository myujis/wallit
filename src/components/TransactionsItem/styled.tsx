import styled from "styled-components";

export const Item = styled.div`
  width: 280px;
  height: 70px;
  background: #ffffff;
  border-radius: 10px;
  margin: 10px;
  position: relative;
  transition: 0.2s ease-in-out;
  -webkit-box-shadow: 0px 13px 20px -3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 13px 20px -3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 13px 20px -3px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    -webkit-box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.2);
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

  user-select: none;
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
  user-select: none;

  color: #38e86a;
  font-weight: bold;
  font-size: 1.2em;
`;
