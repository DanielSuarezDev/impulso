import { FC, useEffect, useState } from "react";
import { Banner } from "../../Components/Molecules/Banner/Banner";
import { useAuth } from "../../Context/Auth/AuthContext";
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
import animationData from "../../Lottie/hero.json";
import TextSwitcher from "../../Components/Atoms/TextSwitcher/TextSwitcher";
import { Button } from "../../Components/Atoms/Button/Button";
import { Card } from "../../Components/Molecules/Card/Card";
import { CardBlog } from "../../Components/Molecules/CardBlog/CardBlog";
import { CardSalvation } from "../../Components/Molecules/CardSalvation/CardSalvation";
import resource from "../../Lottie/resources.json";
import donate from "../../Lottie/donate.json";
import { CardResources } from "./Components/CardResources";

export const Home: FC<any> = ({ ListMinisters }) => {
  const { userConfig } = useAuth();

  return (
    <Container>
      <Welcome>
        Bienvenido 👋{" "}
        {userConfig?.displayName !== undefined
          ? userConfig.displayName?.split(" ")[0].toLowerCase()
          : ""}
      </Welcome>
      <h3>Tesoro del día</h3>
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
      <Button text="Inicia sesión" />
      <TextSwitcher />
      <Lottie animationData={animationData} loop={true} width={700} />

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
      <CardBlog />
      <CardBlog />
      <CardBlog />

      <CardResources
        title="Quieres tener recursos"
        text="Nosotros te proveemos todo tipo de material solo entra en nuestra sección de recursos"
        lottie={resource}
        textButton="Ir a recursos"
      />
      <CardResources
        title="Quieres apoyarnos"
        text="Para nosotros es una gran bendicion que quieras apoyarnos, solo entra en nuestra sección de donaciones y apoya nuestro ministerio"
        background="#FF8EEC"
        lottie={donate}
        textButton="Saber Mas"
      />
    </Container>
  );
};
