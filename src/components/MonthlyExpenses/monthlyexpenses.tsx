import { Root, Head, ItemList } from "./styled";
import TransactionsItem from "../TransactionsItem/transactionsitem";

function MonthlyExpenses() {
  return (
    <Root>
      <Head>Despesas Mensais</Head>
      <ItemList>
        <TransactionsItem name="Consórcio" type="Carro" number={-272.65} />
        <TransactionsItem name="Aluguel" type="Moradia" number={-3135.0} />
      </ItemList>
    </Root>
  );
}
export default MonthlyExpenses;
