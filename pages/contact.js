import { useEffect, useState } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsWhatsapp, BsPerson, BsYoutube } from "react-icons/bs";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export default function Contact() {
  // test
  const [coverUrl, setCoverUrl] = useState(null);

  const storage = getStorage();

  // Create a reference under which you want to list
  const coverRef = ref(storage, `home/home-photo.jpg`);

  // const pathReference = ref(storage, 'images/stars.jpg');
  useEffect(() => {
    getDownloadURL(coverRef).then((url) => {
      // Insert url into an <img> tag to "download"
      setCoverUrl(url);
    });
  }, [coverRef]);
  return (
    <Container
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, .6)) , url('${coverUrl}')`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      height="90vh"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Box
          bg="gray.400"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="black">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: "2px solid black" }}
                        leftIcon={<MdPhone color="black" size="20px" />}
                      >
                        +1-859-488-6846
                      </Button>
                      {/* <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        hello@abc.com
                      </Button> */}
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: "2px solid black" }}
                        leftIcon={<MdLocationOn color="black" size="20px" />}
                      >
                        Puerto Plata, DR
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#4267B2" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="whatsapp"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#25D366" }}
                      icon={<BsWhatsapp size="28px" />}
                    />
                    <IconButton
                      aria-label="youtube"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#FF0000" }}
                      icon={<BsYoutube size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Your Number</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdPhone color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.400"
                          _hover={{
                            borderRadius: "gray.400",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="gray.400"
                          color="white"
                          _hover={{color: "black"}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
