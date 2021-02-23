import "../styles/home-page.css";
import Header from "../components/Header/header";
import Transactions from "../components/Transactions/transactions";
import styled from "styled-components";
import DiaryLimit from "../components/DiaryLimit/diarylimit";
import MonthlyExpenses from "../components/MonthlyExpenses/monthlyexpenses";
import Objectives from "../components/Objectives/objectives";
import Graphs from "../components/Graphs/graphs";

function HomePage() {
  return (
    <Body>
      <Header />
      <Container>
        <Column>
          <Transactions />
          <Objectives quantity={3.0} />
        </Column>
        <Column>
          <DiaryLimit limit={250.0} available={180.0} />
          <MonthlyExpenses />
        </Column>
        <Column>
          <Graphs />
        </Column>
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
  height: calc(100% - 100px);
  width: 100vw;
  padding: 15px;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  height: 100%;
  width: 16%;
  display: flex;
  flex-direction: column;
`;
