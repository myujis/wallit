
import { Root, Head, Number, Body, Description } from './styled';
import styled from 'styled-components';

interface Props {
    limit: number;
    available: number;
}

export const AvailableBar = styled.div`
    height:20px;
    border-radius:20px;
    background-color:#38e86a;
    position:absolute;
    left:0px;
    z-index:1;
`;

export const TotalBar = styled.div`
    height:20px;
    width:80%;
    margin:10px;
    border-radius:20px;
    background-color: rgba(209, 209, 209, 1);
    position:absolute;
    bottom:10px;
    z-index:0;

`;

function DiaryLimit(props: Props) {
    const barWidth = props.available / props.limit;
    return (
        <Root>
            <Head>Limite Diário</Head>
            <Body>
                <Description>Você pode gastar</Description>
                <Number>{props.available.toFixed(2)}</Number>
                <TotalBar>
                    <AvailableBar style={{width:`${barWidth}`}}/>
                </TotalBar>
            </Body>
        </Root>
    );
}
export default DiaryLimit;

