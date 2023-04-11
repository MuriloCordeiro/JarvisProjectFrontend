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
import { BannersCarousel } from "../components/bannercarousel";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}
export default function LayoutDesk({ children, ...rest }: LayoutProps) {
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
          <Flex px="15rem" py="2.5rem" direction="column" h="100vh">
            {children}
          </Flex>
        </>
      ) : (
        <>teste</>
      )}
      {/* LAYOUT DESKTOP */}
    </>
  );
}
