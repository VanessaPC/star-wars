import { QueryClientProvider, QueryClient } from "react-query";
import { GlobalStyle } from "../styles/global";
import { UserSelectionProvider } from "../providers/characterProvider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <UserSelectionProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </UserSelectionProvider>
    </>
  );
}

export default MyApp;
