import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "../Layouts/header";
import { defaultTheme } from "../../styles/theme.ts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Header />

      <Component />
    </ChakraProvider>
  );
}
