import profile_picture from "../../images/profile_picture.jpeg";
import ExpandDownArrow from "../../images/Expand_down_bigger.png";
import LogoW from "../../images/wallitbranco.png";
import {
  Root,
  UserInfoContainer,
  ContainerImage,
  UserName,
  ExpandDown,
  LogoContainer,
  Logo,
  NavigationBarItem,
  NavigationBar,
} from "./styled";

function Header() {
  return (
    <Root>
      <NavigationBar>
        <NavigationBarItem>Dashboard</NavigationBarItem>
        <NavigationBarItem>Funcionalidades</NavigationBarItem>
        <NavigationBarItem>Calculadoras</NavigationBarItem>
        <NavigationBarItem>Contato</NavigationBarItem>
      </NavigationBar>
      <LogoContainer>
        <Logo src={LogoW} />
      </LogoContainer>
      <UserInfoContainer>
        <ContainerImage src={profile_picture} />
        <UserName>Matheus</UserName>
        <ExpandDown src={ExpandDownArrow} />
      </UserInfoContainer>
    </Root>
  );
}
export default Header;
