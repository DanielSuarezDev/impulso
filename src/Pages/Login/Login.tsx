import { FC, useState } from "react";
import SignInForm from "./Components/FormLogin";
import ImageBanner from "../../assets/images/login-banner.jpg";
import ImageGoogle from "../../assets/images/google-logo.png";
import { Container, Image, Link, Subtitle, Title, } from "./styles";
import { ButtonGoogle } from "./Components/styles";
import Divider from "../../Components/Atoms/Divider/Divider";
import RegisterForm from "./Components/FormRegister";

interface LoginProps {
  googleSignIn: () => void;
}

export const Login: FC<LoginProps> = ({ googleSignIn }) => {
  const [showRegister, setShowRegister] = useState(false)
  return (
    <Container>
      <Image src={ImageBanner} alt="banner" />
     {!showRegister ?
     <>
     <Title>Iniciar sesión</Title>
      <Subtitle>Impulsando tu ministerio para la gloria de Dios</Subtitle>
      <SignInForm />
      <Link onClick={() => setShowRegister(!showRegister)}>¿No tienes cuenta? Registrate</Link>
      <Divider />
      <ButtonGoogle onClick={googleSignIn}>
        <Image src={ImageGoogle} alt="logo google" width="27px" height="27px" />
        iniciar sesion con Google
      </ButtonGoogle>
      </>
    :  
    <>
    <Title>Registrarse</Title>
      <RegisterForm />
      <Link onClick={() => setShowRegister(!showRegister)}>¿Ya tienes cuenta? Iniciar sesión</Link>
      <Divider />
      <ButtonGoogle onClick={googleSignIn}>
        <Image src={ImageGoogle} alt="logo google" width="27px" height="27px" />
        Registrarse sesion con Google
      </ButtonGoogle>
      </>
    }
    </Container>
  );
};
