import { ThemeProvider } from "styled-components";
import { FC, createContext, Suspense, useState } from "react";

import { Router } from "./routes/Router";
import { GlobalStyle } from "./Config/GlobalStyle";
import { lightTheme } from "./Config/ImpulsoTheme";
import { AuthProvider } from "./Context/Auth/AuthContext";

export const ThemeContext = createContext<any>(null);

const App: FC = () => {
  // eslint-disable-next-line no-restricted-globals
  const [width, setwidth] = useState(window.screen.width);
  console.log(width);
  return (
    <>
      {width < 768 && (
        <ThemeContext.Provider value={lightTheme}>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <Suspense fallback={<p>loading pending .....</p>}>
              <AuthProvider>
                <Router />
              </AuthProvider>
            </Suspense>
          </ThemeProvider>
        </ThemeContext.Provider>
      )}
      {width > 768 && (
        <ThemeContext.Provider value={lightTheme}>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <Suspense fallback={<p>loading pending .....</p>}>
              <AuthProvider>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <h1>
                    Lo siento, esta página se accede unica y exclusivamente en
                    dispositivos móviles
                  </h1>
                </div>
              </AuthProvider>
            </Suspense>
          </ThemeProvider>
        </ThemeContext.Provider>
      )}
    </>
  );
};

export default App;
