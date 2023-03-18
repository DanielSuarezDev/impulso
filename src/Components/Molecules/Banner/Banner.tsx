import { FC } from "react";
import { Container, Image, Title } from "./styles";
import Tesoro from "../../../assets/images/tesoro.png";
import Lottie from "lottie-react";
import animationData from "../../../Lottie/treasure.json";

export interface BannerProps {
  text?: string;
}

export const Banner: FC<BannerProps> = ({ text }) => {
  return (
    <Container>
      <div>
        <Title> {text}</Title>
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: '90px',
          width: 150,
          height: 150,
        }}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          // style={{ width: 150, height: 150 }}
        />
      </div>
    </Container>
  );
};
