import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { darkTheme, lightTheme } from "../styles/themes";
import { UserSelectionProvider } from "../providers/characterProvider";

// Remove here this
// import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  let [isDarkTheme, toggleTheme] = useState(true);

  const actionToggleTheme = () => {
    toggleTheme(!isDarkTheme);
  };
  console.log("isDarkTheme", isDarkTheme);

  // library.add(faUserAstronaut);
  // dom.watch();

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <UserSelectionProvider>
          <QueryClientProvider client={queryClient}>
            <Component
              {...pageProps}
              actionToggleTheme={actionToggleTheme}
              isDarkTheme={isDarkTheme}
            />
          </QueryClientProvider>
        </UserSelectionProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
