import React, {FC, useState } from "react";
import { Logo, MenuBar } from "../../../assets";
import { DrawerMenu } from "../../../Pages/Login/Components/DrawerMenu";
import { Container } from "./styles";

export const Header:FC<any> = ({userConfig}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
  
    const handleClose = () => setIsOpen(false);


  return (
    <>
        {isOpen && <DrawerMenu open={isOpen} handleClose={handleClose } userConfig={userConfig}   />}
    <Container>
      <img src={Logo} alt="Logo" width={180} height={60} />
      <MenuBar onClick={handleOpen} />
    </Container>
    </>
  );
};
