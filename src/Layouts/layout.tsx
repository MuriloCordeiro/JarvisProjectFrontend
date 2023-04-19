import {
  Flex,
  Text,
  Img,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Router, useRouter } from "next/router";
import Header from "./header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  bgColor?: any;
  px?: string[];
  mb?: string;
}
export default function Layout({ children, ...rest }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Router = useRouter();

  const isWideVersion = useBreakpointValue({
    md: true,
    lg: true,
  });

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
