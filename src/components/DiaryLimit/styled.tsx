import styled from 'styled-components';

export const Root = styled.div`
    width:300px;
    height:280px;
  background: rgba(209, 209, 209, 0.4);
  border-radius: 10px;
    margin:10px;
    display:flex;
    flex-direction:column;
    position:relative;
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
    height:70%;
    width: 280px;
  background: #ffffff;
  border-radius: 10px;
  margin: 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  bottom:0;

`;

export const Description = styled.div`
    font-size:1em;
    font-weight:600;
    position:absolute;
    top:0;
    margin:10px;
`;

export const Number = styled.div`
  color: #38e86a;
  font-weight: bold;
  font-size: 2.5em;
`;
