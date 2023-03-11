import { FC } from "react";
import { Footer } from "../../Molecules/Footer/Footer";
import { Header } from "../../Molecules/Header/Header";

export const Layout: FC<any> = ({ children,userConfig }) => {
  return (
    <div style={{marginTop: '50px', position: 'relative'}}>
      <Header userConfig={userConfig} />
      {children}
      <Footer />
    </div>
  );
};
