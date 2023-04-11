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

export default function LayoutDesk(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Router = useRouter();

  const isWideVersion = useBreakpointValue({
    base: false,
    xsm: false,
    sm: true,
    medium: false,
    large: true,
  });

  return (
    <>
      {/* LAYOUT MOBILE */}
      {isWideVersion ? (
        <>
          <Header />
          <Flex px="15rem" py="2.5rem" direction="column" h="100vh">
            {props.children}
          </Flex>
        </>
      ) : (
        <>teste</>
      )}
      {/* LAYOUT DESKTOP */}
    </>
  );
}
