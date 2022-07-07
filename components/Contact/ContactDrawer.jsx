import { useRef, useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  Input,
  Textarea,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Link,
  Center,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsWhatsapp, BsPerson, BsYoutube } from "react-icons/bs";

function ContactDrawer({ handleContactDrawerToggle, contactDrawerToggle }) {
  const btnRef = useRef();
  const [isWhatsappCopied, setIsWhatsappCopied] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  async function copyContact(content) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(content);
    } else {
      return document.execCommand("copy", true, content);
    }
  }

  const handleWhatsappCopyClick = () => {
    copyContact("+1-859-488-6846").then(() => {
      setIsWhatsappCopied(true);
      setTimeout(() => {
        setIsWhatsappCopied(false);
      }, 1500);
    });
  };

  const handleEmailCopyClick = () => {
    copyContact("admin@varrus.net").then(() => {
      setIsEmailCopied(true);
      setTimeout(() => {
        setIsEmailCopied(false);
      }, 1500);
    });
  };

  return (
    <>
      <Drawer
        isOpen={contactDrawerToggle}
        placement="right"
        onClose={handleContactDrawerToggle}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Contact Us</DrawerHeader>

          <DrawerBody>
            <Flex flexDir="column">
              <Center flexDirection="column">
                <Box py={{ base: 1, sm: 1, md: 2, lg: 3 }}>
                  <VStack pl={0} spacing={1} alignItems="flex-start">
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="black"
                      _hover={{ border: "2px solid black" }}
                      leftIcon={<BsWhatsapp color="black" size="20px" />}
                      onClick={handleWhatsappCopyClick}
                    >
                      {isWhatsappCopied
                        ? "Whatsapp Copied!"
                        : " +1-859-488-6846"}
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="black"
                      _hover={{ border: "2px solid black" }}
                      leftIcon={<MdEmail color="black" size="20px" />}
                      onClick={handleEmailCopyClick}
                    >
                      {isEmailCopied ? "Email Copied!" : "admin@varrus.net"}
                    </Button>
                    {/* <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="black"
                    _hover={{ border: "2px solid black" }}
                    leftIcon={<MdLocationOn color="black" size="20px" />}
                  >
                    Puerto Plata, DR
                  </Button> */}
                  </VStack>
                </Box>
                <HStack
                  mt={{ lg: 2, md: 2 }}
                  spacing={1}
                  px={2}
                  alignItems="flex-start"
                >
                  <Link
                    href="https://www.facebook.com/VarrusLLC/"
                    target="_blank"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#4267B2" }}
                      icon={<MdFacebook size="28px" />}
                    />
                  </Link>
                  {/* <IconButton
                  aria-label="whatsapp"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: "#25D366" }}
                  icon={<BsWhatsapp size="28px" />}
                /> */}
                  <Link
                    href="https://www.youtube.com/channel/UCXTZn7iWFcGAkAc3zuoVH0A"
                    target="_blank"
                  >
                    <IconButton
                      aria-label="youtube"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#FF0000" }}
                      icon={<BsYoutube size="28px" />}
                    />
                  </Link>
                </HStack>
              </Center>

              <Box bg="white" borderRadius="lg">
                <Box m={2} color="#0B0E3F">
                  <VStack spacing={5}>
                    <Text mt={{ sm: 2, md: 2, lg: 3 }} color="black">
                      Leave a message below
                    </Text>
                    <FormControl id="name">
                      <FormLabel>Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" placeholder="Full Name" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="contact">
                      <FormLabel>Contact</FormLabel>
                      <Tabs variant="soft-rounded" colorScheme="blackAlpha">
                        <TabList>
                          <Tab>
                            <IconButton
                              aria-label="email"
                              variant="ghost"
                              size="lg"
                              isRound={true}
                              _hover={{ bg: "#FBBC05" }}
                              icon={<MdEmail size="20px" />}
                            />
                          </Tab>
                          <Tab>
                            <IconButton
                              aria-label="whatsapp"
                              variant="ghost"
                              size="lg"
                              isRound={true}
                              _hover={{ bg: "#25D366" }}
                              icon={<BsWhatsapp size="20px" />}
                            />
                          </Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel p={0}>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                placeholder="Email Address"
                              >
                                <MdEmail color="gray.800" />
                              </InputLeftElement>
                              <Input
                                type="email"
                                size="lg"
                                placeholder="Email Address"
                              />
                            </InputGroup>
                          </TabPanel>
                          <TabPanel p={0}>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <BsWhatsapp color="gray.800" />
                              </InputLeftElement>
                              <Input
                                type="tel"
                                size="lg"
                                placeholder="Whatsapp Number"
                              />
                            </InputGroup>
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                    </FormControl>
                    <FormControl id="message">
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        borderColor="gray.400"
                        _hover={{
                          borderRadius: "gray.400",
                        }}
                        placeholder="Message"
                      />
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={handleContactDrawerToggle}
            >
              Cancel
            </Button>
            <Button
              variant="solid"
              bg="black"
              color="white"
              _hover={{ color: "gray.400" }}
            >
              Send Message
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ContactDrawer;
