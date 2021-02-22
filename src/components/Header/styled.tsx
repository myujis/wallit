import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(209, 209, 209, 0.5);
  position: relative;
`;

export const LogoContainer = styled.div`
  height: 56px;
  width: auto;
  background-color: #38e86a;
  border-radius: 10px;
  margin: 7px;
  padding-left: 7px;
  padding-right: 7px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 80%;
  max-width: auto;
  user-select: none;
  -webkit-user-drag: none;
`;

export const NavigationBar = styled.div`
  height: 80%;
  width: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 7px;

  position: absolute;
  left: 0;
`;

export const NavigationBarItem = styled.div`
  height: 80%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px;
  color: white;
  font-weight: 500;
  font-size: large;

  position: relative;

  &:hover {
    cursor: pointer;
  }
  &::before {
    height: 5px;
    width: 0px;
    position: absolute;
    bottom: 1px;
    left: 50%;
    content: "";
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  &:hover::before {
    width: 50%;
    background-color: #38e86a;
  }
  &::after {
    height: 5px;
    width: 0px;
    position: absolute;
    bottom: 1px;
    right: 50%;
    content: "";
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  &:hover::after {
    width: 50%;
    background-color: #38e86a;
  }
`;

export const ContainerImage = styled.img`
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
  padding-left: 7px;
  padding-right: 7px;
  z-index: 1;
`;

export const UserName = styled.span`
  color: white;
  font-weight: 500;
  font-size: large;
  padding-left: 7px;
  padding-right: 7px;
  z-index: 1;
`;

export const ExpandDown = styled.img`
  max-width: 50px;
  max-height: 50px;
  z-index: 1;
  transition: 0.25s;
  padding-left: 7px;
  padding-right: 7px;
`;

export const UserInfoContainer = styled.div`
  height: 80%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 10px;
  transition: 0.3s ease-out;
  position: absolute;
  right: 0;
  margin: 7px;
  padding-left: 7px;
  padding-right: 7px;

  &:hover {
    cursor: pointer;
  }
  &::before {
    height: 0px;
    width: 100%;
    position: absolute;
    left: 0;
    content: "";
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  &:hover::before {
    height: 100%;
    border-radius: 8px;
    background-color: #38e86a;
  }
`;
