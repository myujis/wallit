import {
  Root,
  Head,
  Button,
  Image,
  Body,
  Text,
  ImageContainer,
  Number,
} from "./styled";
import ObjImage from "../../images/objectives_image.png";

interface Props {
  quantity: number;
}

function Objectives(props: Props) {
  return (
    <Root>
      <Body>
        <ImageContainer>
          <Image src={ObjImage} />
          <Text>
            Você possui <Number>{props.quantity}</Number> objetivos
          </Text>
        </ImageContainer>
        <Button>Adicionar</Button>
      </Body>
    </Root>
  );
}
export default Objectives;
