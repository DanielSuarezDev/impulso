/* eslint-disable no-restricted-globals */
import { FC, useEffect, useState } from "react";
import { Banner } from "../../Components/Molecules/Banner/Banner";
import { useAuth } from "../../Context/Auth/AuthContext";
import MarkdownList from '../../Components/Molecules/Markdown/MarkdownList';
import { Helmet } from 'react-helmet';
import {
  Container,
  ContainerCards,
  Dios,
  Ministerio,
  Text,
  Title,
  Welcome,
} from "./styles";

import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import animationData from "../../Lottie/hero.json";
import TextSwitcher from "../../Components/Atoms/TextSwitcher/TextSwitcher";
import { Button } from "../../Components/Atoms/Button/Button";
import { Card } from "../../Components/Molecules/Card/Card";
import { CardSalvation } from "../../Components/Molecules/CardSalvation/CardSalvation";
import resource from "../../Lottie/resources.json";
import donate from "../../Lottie/donate.json";
import { CardResources } from "./Components/CardResources";
import { DrawerDonate } from "./Components/DrawerDonate/DrawerDonate";

export const Home: FC<any> = ({ ListMinisters }) => {
  const { userConfig } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);
  const navigate = useNavigate();

  return (
    <Container>
      <Helmet>
      <meta name="description" content="Impulsando tu ministerio con sana doctrina" />
        <meta name="keywords" content="cristiano, iglesia, fe, mas impulso, impulso, impulso cristiano" />
      </Helmet>
      <Welcome>
        Bienvenido 👋{" "}
        {userConfig?.displayName !== undefined
          ? userConfig.displayName?.split(" ")[0].toLowerCase()
          : ""}
      </Welcome>
      <Banner text="La paz de Cristo nos envuelve como un manto protector, fortaleciéndonos para soportar las tempestades de la vida y recordándonos que en todo momento, estamos en sus manos." />
      <Title>
        Impulsando tu <Ministerio>ministerio</Ministerio> para la gloria de{" "}
        <Dios>Dios</Dios>
      </Title>
      <Text>
        Descubre la fuente de motivación y dirección en tu fe con Inspiración y
        Guía en Tu Camino Cristiano. Con contenido fresco y inspirador, te
        acompañaremos en tu jornada espiritual para ayudarte a crecer y
        fortalecer tu relación con Dios.
      </Text>
      {!userConfig && <Button text="Inicia sesión"  onClick={() => navigate("/login")} />}
      <TextSwitcher />
      <Lottie animationData={animationData} loop={true}  />

      <Title>Nuestro enfoque</Title>
      <Text>
        Todo nuestro material va enfocado al ministerio de niños y maestros pero
        sin embargo tambien sacamos material para todo ministerio como:
      </Text>

      <ContainerCards>
        {ListMinisters.map((item: any, index: number) => (
          <Card key={index} text={item.name} img={item.img} />
        ))}
      </ContainerCards>

      <CardSalvation />

      <Title>Nuestros ultimos articulos</Title>
          <MarkdownList showAll={false} />

      <CardResources
        title="Quieres tener recursos"
        text="Nosotros te proveemos todo tipo de material solo entra en nuestra sección de recursos"
        lottie={resource}
        textButton="Ir a recursos"
        onclick={() => navigate("/recursos")}
      />
      <CardResources
        title="Quieres apoyarnos"
        text="Para nosotros es una gran bendicion que quieras apoyarnos, solo entra en nuestra sección de donaciones y apoya nuestro ministerio"
        background="#FF8EEC"
        lottie={donate}
        textButton="Saber Mas"
        onclick={handleOpen}
      />
      {isOpen && (
        <DrawerDonate
          open={isOpen}
          handleClose={handleClose}
          userConfig={userConfig}
        />
      )}
    </Container>
  );
};
