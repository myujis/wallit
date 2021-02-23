import { Root, Head, ItemList } from "./styled";
import styled from "styled-components";
import TransactionsItem from "../TransactionsItem/transactionsitem";

interface Props {}

function Transactions() {
  return (
    <Root>
      <Head>Transações</Head>
      <ItemList>
        <TransactionsItem name="Kikao" type="Alimentação" date="13:30 23/02/2021" number={-61.0} />
        <TransactionsItem name="Alvorada" type="Alimentação" date="13:30 23/02/2021" number={-45.56} />
        <TransactionsItem name="Bar" type="Entretenimento" date="13:30 23/02/2021" number={-89.32} />
        <TransactionsItem name="Cinema" type="Entretenimento" date="13:30 23/02/2021" number={-35.0} />
        <TransactionsItem name="Bolice" type="Entretenimento" date="13:30 23/02/2021" number={-60.0} />
      </ItemList>
    </Root>
  );
}
export default Transactions;
