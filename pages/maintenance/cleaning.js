import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Image as ChakraImage,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import Image from "next/image";
import VarrusLogoBlack from "../../assets/images/varrus-logo-black.png";
import { ContactModal } from "../../components/Contact";
// Replace test data with your own
const features = [
  {
    id: 1,
    title: "Efficient",
    text: "Give us your schedule or due date and we'll handle the rest.",
  },
  {
    id: 2,
    title: "Transparency",
    text: "We guarantee you'll know every step of the process with reassurance.",
  },
  {
    id: 3,
    title: "Experience",
    text: "We have a dedicated team of professional cleaners that have years of experience working for large companies",
  },
  {
    id: 4,
    title: "Photography",
    text: "We send photos after completion to confirm you're satisfaction",
  },
];

export default function GridListWithHeading() {
  const varrusPropertiesLogoLink =
    "https://firebasestorage.googleapis.com/v0/b/varrus-ee20f.appspot.com/o/home%2Fvarrus-maitenance-cleaning-banner.png?alt=media&token=bdc33216-f117-4d36-a044-43602c9e9bb4";
  const [contactModalToggle, setContactModalToggle] = useState(false);

  const handleContactModalToggle = () => {
    setContactModalToggle((prev) => !prev);
  };

  return (
    <>
      <ChakraImage
        src={varrusPropertiesLogoLink}
        width="100vw"
        height={{ base: "20vh", md: "35vh" }}
        alt="Properties Logo"
      />
      <Box p={20}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Cleaning Services</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Schedule cleanings at your home, AirBnBs or apartment. We work
            within your timeframe to delivery quality and efficient services.
          </Text>
          <Button
            fontWeight={"bold"}
            display="flex"
            alignItems="center"
            gap="2"
            onClick={handleContactModalToggle}
          >
            Clean Up Today
            <Image
              size="sm"
              src={VarrusLogoBlack}
              alt="agency icons"
              width={25}
              height={25}
            />
          </Button>
          <ContactModal
            handleContactModalToggle={handleContactModalToggle}
            contactModalToggle={contactModalToggle}
            subject="maintenance"
          />
        </Stack>
        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack
                key={feature.id}
                align={"top"}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                padding="25px"
              >
                <VStack align={"start"}>
                  <Box
                    display="flex"
                    color={"green.400"}
                    px={2}
                    gap="2"
                    alignItems="center"
                  >
                    <Icon as={CheckIcon} />
                    <Text fontWeight={600}>{feature.title}</Text>
                  </Box>
                  <Text color={"gray.600"}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
