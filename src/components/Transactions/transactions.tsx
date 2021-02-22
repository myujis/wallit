import { Root, Item, Head, ItemList, Name, Type, Info } from "./styled";
import styled from "styled-components";

export const Number = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

function Transactions() {
  return (
    <Root>
      <Head>Transações</Head>
      <ItemList>
        <Item>
          <Info>
            <Name>Kikao</Name>
            <Type>Restaurante</Type>
          </Info>
          <Number style={{ color: "#38e86a" }}>+61,00</Number>
        </Item>
        <Item>
          <Info>
            <Name>Consórcio</Name>
            <Type>Porto Seguro</Type>
          </Info>
          <Number style={{ color: "#ff0000" }}>-272,65</Number>
        </Item>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ItemList>
    </Root>
  );
}
export default Transactions;
