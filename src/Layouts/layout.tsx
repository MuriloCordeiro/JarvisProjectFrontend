import { Flex } from "@chakra-ui/react";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  bgColor?: any;
  px?: string[];
  mb?: string;
  transition?: string;
}
export default function Layout({ children, ...rest }: LayoutProps) {
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        w={"full"}
        minH={"100vh"}
        h={"auto"}
        {...rest}
      >
        {children}
      </Flex>
    </>
  );
}
