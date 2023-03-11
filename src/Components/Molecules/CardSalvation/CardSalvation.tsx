import Lottie from "lottie-react";
import { Button } from "../../Atoms/Button/Button";
import { Container, Text, Title } from "./styles";
import animationData from "../../../Lottie/bible.json";

export const CardSalvation = () => {
  return (
    <Container>
        <Lottie animationData={animationData} loop={true} style={{ width: 150 , height: 150}} />
      <Title>¿Quieres ser salvo?</Title>
      <Text>
        Sabemos que todos somos pecadores Romanos
        3:23, si tu mueres hoy sin haber recibido a Jesús como tu salvador, no
        podrás entrar al cielo, pero si recibes a Jesús como tu salvador, podrás
        entrar al cielo, y vivirás eternamente con Dios.
      </Text>

    
      <Button text="Quiero saber más" background="#F2F2F2" color="#000" />
      
    
    </Container>
  );
};
