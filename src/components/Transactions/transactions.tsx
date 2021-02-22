import { Root, Item, Head, ItemList, Name, Type, Info } from "./styled";
import styled from "styled-components";
import TransactionsItem from './TransactionsItem/transactionsitem';


interface Props{

}

function Transactions() {
  return (
    <Root>
      <Head>Transações</Head>
      <ItemList>
        <TransactionsItem name="Consórcio" type="Despesa Fixa" number={-272.65}/>
        <TransactionsItem name="Kikao" type="Alimentação" number={-61.00}/>
        <TransactionsItem name="Kikao" type="Alimentação" number={45.56}/>
      </ItemList>
    </Root>
  );
}
export default Transactions;
