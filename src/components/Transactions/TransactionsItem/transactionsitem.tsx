import Transactions from "../transactions";
import { Item, Info, Name, Type, Number } from './styled';


interface Props {
    name: string,
    type: string,
    number: number,
}

function TransactionsItem(props: Props) {
    const color = props.number >= 0 ? '#38e86a' : '#ff0000'; 
    const signal = props.number >= 0 ? '+' : '';
    return (
        <Item>
            <Info>
                <Name>{props.name}</Name>
                <Type>{props.type}</Type>
            </Info>
            <Number style={{color: `${color}`}}>{signal}{props.number.toFixed(2)}</Number>
        </Item>
    );

}
export default TransactionsItem;