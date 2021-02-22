import "../styles/home-page.css";
import Header from "../components/Header/header";
import Transactions from "../components/Transactions/transactions";
import styled from "styled-components";

function HomePage() {
  return (
    <Body>
      <Header />
      <Container>
        <Transactions />
        <Transactions />
        <Transactions />
      </Container>
    </Body>
  );
}
export default HomePage;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  height: auto;
  width: 100vw;
  padding: 15px;
`;
