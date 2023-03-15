import { FC } from "react";
import { Close } from "../../../../assets";
import Nequi from "../../../../assets/images/nequi-logo.png";
import { DrawerContainer, Overlay, Container } from "./styles";

export const DrawerDonate: FC<any> = ({ open, handleClose }) => {
  return (
    <Overlay open={open} onClick={handleClose}>
      <DrawerContainer open={open}>
        <Close onClick={handleClose} />
        <Container>
          <p>
            <strong>Apoyando nuestro enfoque</strong>
          </p>
          <p style={{ width: "85%" }}>
            Para nosotros es un honor saber que quieres apoyar lo que hacemos y
            lo que quieras ofrendar para nosotros es un privilegio.
          </p>
          <img src={Nequi} alt="" />
          <p>
            Puedes consignar a la cuenta nequi <br />
            <strong>3194096681</strong>
          </p>
          <p>
            Nos puedes enviar el soporte al correo:
            <br />
            <strong>impulsocristiano@gmail.com </strong>
          </p>
        </Container>
      </DrawerContainer>
      ;
    </Overlay>
  );
};
