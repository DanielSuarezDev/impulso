import { ThemeProvider } from "styled-components";
import { FC, createContext, Suspense, useState, useEffect } from "react";

import { Router } from "./routes/Router";
import { GlobalStyle } from "./Config/GlobalStyle";
import { lightTheme } from "./Config/ImpulsoTheme";
import { AuthProvider } from "./Context/Auth/AuthContext";
import { BlogProvider } from "./Context/Blog/BlogContext";
import { ResourceProvider } from "./Context/Resource/ResourceContext";
import { logEvent } from "firebase/analytics";
import { analitycs } from "./Config/firebase";

export const ThemeContext = createContext<any>(null);

const App: FC = () => {
  // eslint-disable-next-line no-restricted-globals
  const [width] = useState(window.screen.width);
  useEffect(() => {
    logEvent(analitycs, 'page_views', {
      page_path: window.location.pathname + window.location.search,
    });
  }, []);
  return (
    <ThemeContext.Provider value={lightTheme}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Suspense fallback={<p>loading pending .....</p>}>
          <AuthProvider>
            <ResourceProvider>
              <BlogProvider>
                <Router />
              </BlogProvider>
            </ResourceProvider>
          </AuthProvider>
        </Suspense>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
