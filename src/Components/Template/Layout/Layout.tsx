import { FC } from "react";
import { Footer } from "../../Molecules/Footer/Footer";
import { Header } from "../../Molecules/Header/Header";

export const Layout: FC<any> = ({ children,userConfig }) => {
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      marginTop: '50px',
      position: 'relative',
      width: '100%',
    }}
  >
      <Header userConfig={userConfig} />
      <div style={{ flex: 1, marginBottom: '150px' }}>

      {children}
      </div>
      <Footer />
    </div>
  );
};
