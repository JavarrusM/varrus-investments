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
    title: "Editing",
    text: "For videos, we'll edit and get them posted on various social networks.",
  },
  {
    id: 2,
    title: "Transparency",
    text: "You'll know every step of the process with reassurance.",
  },
  {
    id: 3,
    title: "Experience",
    text: "We know how to stage your property to attract various clients, from investors to average home-buyers.",
  },
  {
    id: 4,
    title: "Low Costs",
    text: "We don't charge for virtual photography, as long as we are allowed to sell it through our platform.",
  },
];

export default function GridListWithHeading() {
  const varrusMediaDroneBannerLink =
    "https://firebasestorage.googleapis.com/v0/b/varrus-ee20f.appspot.com/o/home%2Fvarrus-media-drone-banner.png?alt=media&token=ac50ad65-e819-459c-afa3-08088251f10d";
  const [contactModalToggle, setContactModalToggle] = useState(false);

  const handleContactModalToggle = () => {
    setContactModalToggle((prev) => !prev);
  };

  return (
    <>
      <ChakraImage
        src={varrusMediaDroneBannerLink}
        width="100vw"
        height={{ base: "20vh", md: "35vh" }}
        alt="Properties Logo"
      />
      <Box p={20}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Drone Photo and Video Services</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Get pictures and videos of your properties at every angle. Real
            estate media services are free if you list or lease with us.
          </Text>
          <Button
            fontWeight={"bold"}
            display="flex"
            alignItems="center"
            gap="2"
            onClick={handleContactModalToggle}
          >
            Get drone media today
            <Image
              size="sm"
              src={require("../../assets/images/varrus-logo-black.png")}
              alt="agency icons"
              width={25}
              height={25}
            />
          </Button>
          <ContactModal
            handleContactModalToggle={handleContactModalToggle}
            contactModalToggle={contactModalToggle}
            subject="media"
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
