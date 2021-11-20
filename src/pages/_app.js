import { MargaretProvider } from "@tymate/margaret";

function MyApp({ Component, pageProps }) {
  return (
    <MargaretProvider>
      <Component {...pageProps} />
    </MargaretProvider>
  );
}

export default MyApp;
