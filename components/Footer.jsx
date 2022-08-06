import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Button,
  VisuallyHidden,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

import Image from "next/image";

import VarrusLogoBlack from "../assets/images/varrus-logo-black.png";
import MailchimpFormContainer from "./MailChimpContainer";

const Logo = (props) => {
  return (
    <Flex gap="0.5rem">
      <Image
        src={VarrusLogoBlack}
        alt="Varrus logo white"
        width={25}
        height={25}
      />
      <Text color="black" fontWeight="500">
        Varrus LLC
      </Text>
    </Flex>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 1fr 3fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>© 2022 Varrus LLC. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}></Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Link
              href={
                "https://www.youtube.com/channel/UCXTZn7iWFcGAkAc3zuoVH0A/videos"
              }
              target="_blank"
            >
              YouTube
            </Link>
            <Link href={"https://www.facebook.com/VarrusLLC/"} target="_blank">
              Facebook
            </Link>
            <Link
              href={"https://www.instagram.com/varrus.llc/"}
              target="_blank"
            >
              Instagram
            </Link>
            <Link href={"https://medium.com/@varrusllc"} target="_blank">
              Medium
            </Link>
            {/* <Link href={"#"}>Twitter</Link> */}
          </Stack>
          <Stack align={"flex-start"} w="100%">
            <MailchimpFormContainer />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
