import React, {FC, useState } from "react";
import { MenuBar } from "../../../assets";
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
      <h1>Logo</h1>
      <MenuBar onClick={handleOpen} />
    </Container>
    </>
  );
};
