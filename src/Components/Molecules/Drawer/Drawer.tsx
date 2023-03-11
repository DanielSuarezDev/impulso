import { FC } from "react";
import { Close } from "../../../assets";
import { DrawerContainer, Overlay } from "./styles";

export const Drawer: FC<any> = ({ children, open, handleClose }) => {
  return (
    <>
      <Overlay open={open} onClick={handleClose} />
      <DrawerContainer open={open}>
        <Close onClick={handleClose} />
        <div
          style={{
            padding: "20px",
            width: "100%",
            height: "100%",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      </DrawerContainer>
      ;
    </>
  );
};
