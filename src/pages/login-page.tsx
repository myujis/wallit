import "../styles/login-page.css";
import styled from "styled-components";
import Login from "../components/Login/login";

interface LoginData {
  username: string;
  password: string;
}

function LoginPage() {
  return (
    <Body>
      <Login />
    </Body>
  );
}
export default LoginPage;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../images/background-geometry.png");
`;
