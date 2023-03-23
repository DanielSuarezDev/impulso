import React from "react";
import { Facebook, Instagram } from "../../../assets";
import { Container, Span } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href="https://www.facebook.com/profile.php?id=100091130340381"
          target="_blank"
        >
          <Facebook />
        </a>
        <a href="https://www.instagram.com/impulsocristiano1/" target="_blank">
          <Instagram />
        </a>
      </div>
      <Span>© 2021 - Todos los derechos reservados</Span>
    </Container>
  );
};
