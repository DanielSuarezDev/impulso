import { FC } from "react";
import { Drawer } from "../../../Components/Molecules/Drawer/Drawer";
import { Image, Subtitle } from "../styles";
import AvatarDefault from "../../../assets/images/avatar-default.png";
import { ContainerDrawer, LinkList, Span } from "./styles";
import {
  About,
  Blog,
  Facebook,
  Inicio,
  Instagram,
  Resources,
  Share,
} from "../../../assets";
import Divider from "../../../Components/Atoms/Divider/Divider";
import { Button } from "../../../Components/Atoms/Button/Button";
import { useAuth } from "../../../Context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const DrawerMenu: FC<any> = ({ open, handleClose, userConfig }) => {

  const { logOut } = useAuth();
const navigate = useNavigate();
  const handleShareClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      "¡Mira lo que encontré en Impulso Cristiano! https://www.impulsocristiano.info"
    )}`;
    window.open(url, "_blank");
  };

  const Link = [
    {
      name: "Inicio",
      path: "/",
      Icon: Inicio,
    },
    {
      name: "Blog",
      path: "/blog",
      Icon: Blog,
    },
    {
      name: "Recursos",
      path: "/recursos",
      Icon: Resources,
    },
    {
      name: "Nosotros",
      path: "/nosotros",
      Icon: About,
    },
  ];

  const LinlSocial = [
    {
      name: "Facebook",
      path: "https://www.instagram.com/impulsocristiano1/",
      Icon: Facebook,
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/impulsocristiano1/",
      Icon: Instagram,
      onclick: handleShareClick,
    },
    {
      name: "Compartir",
      path: `whatsapp://send?text=${encodeURIComponent(
        "¡Mira este sitio web increíble!"
      )}`,
      Icon: Share,
    },
  ];

  return (
    <Drawer open={open} handleClose={handleClose}>
      <ContainerDrawer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Image
            src={userConfig ? userConfig.photoURL : AvatarDefault}
            alt="Avatar"
            width="87px"
            height="90px"
            radius="11px"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginTop: "5px",
              width: "90%",
            }}
          >
            <Subtitle>Dios te Bendiga te saluda Impulso Cristiano</Subtitle>
            <span>Marcos 16:15</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: "5px",
              width: "100%",
            }}
          >
            {Link.map((item, index) => (
              <LinkList key={index} to={item.path} onClick={handleClose}>
                <item.Icon />
                <Span>{item.name}</Span>
              </LinkList>
            ))}

            <Divider lineUnique />

            {LinlSocial.map((item, index) => (
              <LinkList
                key={index}
                to={item.path}
                onClick={onclick ? onclick : handleClose}
              >
                <item.Icon />
                <Span>{item.name}</Span>
              </LinkList>
            ))}

            <div style={{ position: "absolute", bottom: "30px" }}>
              {userConfig
              ?
              <Button
                onClick={logOut}
                text="Cerrar sesión"
                width="250px"
                background="#FFBDBD"
                color="#e60202"
              />
              :
              <Button
                onClick={ () => navigate('/login')}
                text="Iniciar sesión"
                width="250px"
              />}
            </div>
          </div>
        </div>
      </ContainerDrawer>
    </Drawer>
  );
};
