import "../styles/home-page.css";
import Header from "../components/Header/header";
import Transactions from "../components/Transactions/transactions";
import styled from "styled-components";
import DiaryLimit from '../components/DiaryLimit/diarylimit';

function HomePage() {
  return (
    <Body>
      <Header />
      <Container>
        <Transactions />
        <DiaryLimit limit={256.00} available={120.00}/>
      </Container>
    </Body>
  );
}
export default HomePage;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-x: hidden;
`;

const Container = styled.div`
  height: auto;
  width: 100vw;
  padding: 15px;
`;
