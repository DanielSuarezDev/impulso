import React, { FC } from "react";
import { Container, Image, Title } from "./styles";

export const Card:FC<any> = ({text, img}) => {
  return (
    <Container>
      <Title>{text}</Title>
      <Image src={img} alt="Family" />
    </Container>
  );
};
