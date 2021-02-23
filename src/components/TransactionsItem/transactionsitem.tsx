import { Item, Info, Name, Type, Number, Row, Date } from "./styled";
import moment from 'moment';

interface Props {
  name: string;
  type: string;
  number: number;
  date: string;
}

function TransactionsItem(props: Props) {
  const color = props.number >= 0 ? "#38e86a" : "#ff0000";
  const signal = props.number >= 0 ? "+" : "";
  return (
    <Item>
      <Info>
        <Row><Name>{props.name}</Name><Date>{props.date}</Date></Row>
        <Type>{props.type}</Type>
      </Info>
      <Number style={{ color: `${color}` }}>
        {signal}
        {props.number.toFixed(2)}
      </Number>
    </Item>
  );
}
export default TransactionsItem;
