import Lottie from "lottie-react";
import { Container, Text, Title } from "./styles";
import { Button } from "../../../Components/Atoms/Button/Button";
import { FC } from "react";

export const CardResources:FC<any> = ({title, text, lottie, background, textButton}: any) => {
  return (
    <Container background={background}>
      <Lottie
        animationData={lottie}
        loop={true}
        style={{ width: 350, height: 150 }}
      />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button text={textButton} background="#F2F2F2" color="#000" />
    </Container>
  );
};
