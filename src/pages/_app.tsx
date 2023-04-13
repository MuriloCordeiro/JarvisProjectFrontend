import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "../Layouts/header";
import { defaultTheme } from "../../styles/theme.ts";
import Footer from "../Layouts/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Header />
      <Component />
      <Footer />
    </ChakraProvider>
  );
}
