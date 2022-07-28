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
    title: "Network",
    text: "Leasing your property with us gives you quick access to our internal services.",
  },
  {
    id: 2,
    title: "Transparency",
    text: "We guarantee you'll know every step of the process with reassurance. Remember, we don't get paid until you do!",
  },
  {
    id: 3,
    title: "Experience",
    text: "Our team has verified engineers, lawyers and brokers that can provide you with all your housing needs.",
  },
  {
    id: 4,
    title: "Technology",
    text: "We create surreal experiences, with virtual tours, 3D pictures, drone videos and more; at no additional costs to you.",
  },
];

export default function GridListWithHeading() {
  const varrusPropertiesLogoLink =
    "https://firebasestorage.googleapis.com/v0/b/varrus-ee20f.appspot.com/o/home%2Fvarrus-maitenance-trash-pickup-banner.png?alt=media&token=c218eb13-d542-4621-bc71-bb0a014f880c";
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
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Waste Management Services</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Keep your property clean by setting up trash pickup services. Tell
            us what you need and we will take care of the rest.
          </Text>
          <Button
            fontWeight={"bold"}
            display="flex"
            alignItems="center"
            gap="2"
            onClick={handleContactModalToggle}
          >
            Remove Waste Today
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
