import { FC } from "react";
import { Close } from "../../../../assets";
import Nequi from "../../../../assets/images/nequi-logo.png";
import { DrawerContainer, Overlay, Container, Title, Text } from "./styles";

export const DrawerDonate: FC<any> = ({ open, handleClose }) => {
  return (
    <Overlay open={open} onClick={handleClose}>
      <DrawerContainer open={open}>
        <Close onClick={handleClose} />
        <Container>
            <Title>Apoyando nuestro enfoque</Title>
          <Text>
            Para nosotros es un honor saber que quieres apoyar lo que hacemos y
            lo que quieras ofrendar para nosotros es un privilegio.
          </Text>
          <img src={Nequi} alt="" />
          <Text>
            Escribenos a:
            <br />
            <strong>impulsocristiano@gmail.com </strong>
          </Text>
        </Container>
      </DrawerContainer>
      ;
    </Overlay>
  );
};
