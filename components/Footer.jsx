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
} from "@chakra-ui/react";
import { ReactNode } from "react";

import Image from "next/image";

import VarrusLogoGray from "../assets/images/varrus-logo-gray.png";

const Logo = (props) => {
  return (
    // <svg
    //   height={32}
    //   viewBox="0 0 120 28"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    // >
    <Image
      src={VarrusLogoGray}
      alt="Varrus logo white"
      width={50}
      height={50}
    />
    // <Text color={useColorModeValue("gray.300", "gray.300")}>Varrus LLC</Text>
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
      bg={useColorModeValue("black", "black")}
      color={useColorModeValue("gray.300", "gray.300")}
      pos="relative"
      bottom="0"
      as="footer"
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Text>Overview</Text>
            <Text>Features</Text>
            {/* Example with new emblem */}
            {/* <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>Features</Link>
              <Tag
                size={"sm"}
                bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack> */}
            {/* <Link href={"#"}>Tutorials</Link> */}
            {/* <Link href={"#"}>Pricing</Link> */}
            <Text>Releases</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Text>About Us</Text>
            <Text>Press</Text>
            <Text>Careers</Text>
            <Text href={"/contact"}>Contact Us</Text>
            <Text>Partners</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Text>Cookies Policy</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms of Service</Text>
            <Text>Law Enforcement</Text>
            <Text>Status</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Text>Facebook</Text>
            <Text>Twitter</Text>
            <Text>Dribbble</Text>
            <Text>Instagram</Text>
            <Text>LinkedIn</Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 Varrus LLC. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
