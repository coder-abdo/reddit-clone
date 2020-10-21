import { NhostAuthProvider, NhostApolloProvider } from "react-nhost";
import { auth } from "utils/nhost";
import "styles/tailwind.css";
import "styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider
        auth={auth}
        gqlEndpoint={`https://hasura-e469d3e6.nhost.app/v1/graphql`}
      >
        <Component {...pageProps} />
      </NhostApolloProvider>
    </NhostAuthProvider>
  );
}

export default MyApp;
