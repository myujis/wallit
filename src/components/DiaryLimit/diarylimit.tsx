import {
  Root,
  Head,
  Number,
  Body,
  Description,
  TotalBar,
  AvailableBar,
  Divider,
  Limit,
  Total,
  Text,
  Title,
  Container,
} from "./styled";
import styled from "styled-components";

interface Props {
  limit: number;
  available: number;
}

function DiaryLimit(props: Props) {
  const barWidth = (props.available * 100) / props.limit;
  return (
    <Root>
      <Head>
        <Title>Limite Diário</Title>
      </Head>
      <Body>
        <Limit>
          <Text>Seu limite total de hoje:</Text>
          <Total>{props.limit.toFixed(2)}</Total>
        </Limit>
        <Divider />
        <Container>
          <Description>Você pode gastar</Description>
          <Number>{props.available.toFixed(2)}</Number>
          <TotalBar>
            <AvailableBar style={{ width: `${barWidth}%` }} />
          </TotalBar>
        </Container>
      </Body>
    </Root>
  );
}
export default DiaryLimit;
