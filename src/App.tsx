import { ThemeProvider } from "styled-components";
import { FC, createContext, Suspense } from "react";

import { Router } from "./routes/Router";
import { GlobalStyle } from "./Config/GlobalStyle";
import { lightTheme } from "./Config/ImpulsoTheme";
import { AuthProvider } from "./Context/Auth/AuthContext";

export const ThemeContext = createContext<any>(null);

const App: FC = () => {
  return (
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
  );
};

export default App;
