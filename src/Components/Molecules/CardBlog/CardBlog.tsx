import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Atoms/Button/Button";
import { Container, Image, Text, Time, Title, WrapperTexts } from "./styles";

export const CardBlog = () => {

    const navigate = useNavigate();
  return (
    <Container>
      <Image src="https://i.pinimg.com/originals/b5/1e/3a/b51e3aa027f3f500d5a25ac905e08214.jpg" />

      <WrapperTexts>
        <Title>Titulo del articulo</Title>
        <Text>texto del articulo</Text>
        <Time>5min</Time>
        <Button text="Leer" width="50%" height="30px"  onClick={() => navigate("/blog")} />
      </WrapperTexts>
    </Container>
  );
};
