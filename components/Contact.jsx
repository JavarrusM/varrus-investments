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
  Icon,
  IconButton,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  Modal,
  ModalFooter,
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
  InputRightElement,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsWhatsapp, BsPerson, BsYoutube } from "react-icons/bs";
import { send } from "emailjs-com";
import { CheckIcon } from "@chakra-ui/icons";

const DEADLINE_SERVICES = ["media", "maintenance"];

function ContactModal({
  handleContactModalToggle,
  contactModalToggle,
  subject = "",
}) {
  const btnRef = useRef();
  const [isWhatsappCopied, setIsWhatsappCopied] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
    subject: subject,
    due_date: "",
  });
  const [messageStatus, setMessageStatus] = useState("Send Message");
  const [sendColorStatus, setSendColorStatus] = useState("black");
  const [isSending, setIsSending] = useState(false);

  const emailReg = /\S+@\S+\.\S+/;

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    send("service_6j3sl5k", "template_qtnso49", toSend, "wxUZJwJFUvuLL3o3M")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessageStatus("SENT");
        setSendColorStatus("green");
        setTimeout(() => {
          setSendColorStatus("black");
          setMessageStatus("Send Messenge");
          setToSend({
            from_name: "",
            message: "",
            reply_to: "",
            subject: subject,
            due_date: "",
          });
        }, 1500);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setMessageStatus("FAILED");
        setSendColorStatus("red");
        setTimeout(() => {
          setMessageStatus("Send Message");
        }, 1500);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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
    <Modal
      blockScrollOnMount={false}
      isOpen={contactModalToggle}
      onClose={handleContactModalToggle}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact Agency: Varrus LLC</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
                    _hover={{ border: "2px solid black", bg: "#25D366" }}
                    leftIcon={<BsWhatsapp color="black" size="20px" />}
                    onClick={handleWhatsappCopyClick}
                  >
                    {isWhatsappCopied ? "Whatsapp Copied!" : " +1-859-488-6846"}
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="black"
                    _hover={{ border: "2px solid black", bg: "#FBBC05" }}
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
                  <FormControl isRequired id="name">
                    <FormLabel>Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement pointerEvents="none">
                        <BsPerson color="gray.800" />
                      </InputLeftElement>
                      <Input
                        type="text"
                        size="md"
                        placeholder="Your Full Name"
                        value={toSend.from_name}
                        name="from_name"
                        onChange={handleChange}
                      />
                      {toSend.from_name.length > 0 && (
                        <InputRightElement>
                          <CheckIcon color="green.500" />
                        </InputRightElement>
                      )}
                    </InputGroup>
                  </FormControl>
                  <FormControl id="contact" isRequired>
                    <FormLabel>Contact</FormLabel>
                    <Tabs variant="soft-rounded" colorScheme="blackAlpha">
                      <TabList>
                        <Tab>
                          <Icon
                            aria-label="email"
                            variant="ghost"
                            // size="lg"
                            // isRound={true
                            as={MdEmail}
                          />
                        </Tab>
                        <Tab>
                          <Icon
                            aria-label="whatsapp"
                            variant="ghost"
                            // size="lg"
                            // isRound={true}
                            as={BsWhatsapp}
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
                              placeholder="Your Email Address"
                              name="reply_to"
                              value={toSend.reply_to}
                              onChange={handleChange}
                            />
                            {emailReg.test(toSend.reply_to) && (
                              <InputRightElement>
                                <CheckIcon color="green.500" />
                              </InputRightElement>
                            )}
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
                              placeholder="Your Whatsapp Number"
                              name="reply_to"
                              value={toSend.reply_to}
                              onChange={handleChange}
                            />
                            {toSend.reply_to.length >= 7 && (
                              <InputRightElement>
                                <CheckIcon color="green.500" />
                              </InputRightElement>
                            )}
                          </InputGroup>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </FormControl>
                  <FormControl id="message" isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="gray.400"
                      _hover={{
                        borderRadius: "gray.400",
                      }}
                      placeholder="Message"
                      value={toSend.message}
                      name="message"
                      onChange={handleChange}
                    />
                  </FormControl>
                  {DEADLINE_SERVICES.includes(subject) && (
                    <FormControl id="message" isRequired>
                      <FormLabel>Due Date</FormLabel>
                      <Input
                        placeHolder="Select Date and Time"
                        size="md"
                        backgroundColor="#ffffff"
                        type="date"
                        value={toSend.due_date}
                        name="due_date"
                        onChange={handleChange}
                      />
                    </FormControl>
                  )}
                </VStack>
              </Box>
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" mr={3} onClick={handleContactModalToggle}>
            Cancel
          </Button>
          <Button
            variant="solid"
            bg={sendColorStatus}
            color="white"
            _hover={{ color: "gray.400" }}
            isLoading={isSending}
            onClick={onSubmit}
          >
            {messageStatus}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function ContactDrawer({ handleContactDrawerToggle, contactDrawerToggle }) {
  const btnRef = useRef();
  const [isWhatsappCopied, setIsWhatsappCopied] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [messageStatus, setMessageStatus] = useState("Send Message");
  const [sendColorStatus, setSendColorStatus] = useState("black");
  const [isSending, setIsSending] = useState(false);

  const emailReg = /\S+@\S+\.\S+/;

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    send("service_6j3sl5k", "template_qtnso49", toSend, "wxUZJwJFUvuLL3o3M")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessageStatus("SENT");
        setSendColorStatus("green");
        setTimeout(() => {
          setSendColorStatus("black");
          setMessageStatus("Send Messenge");
          setToSend({
            from_name: "",
            message: "",
            reply_to: "",
          });
        }, 1500);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setMessageStatus("FAILED");
        setSendColorStatus("red");
        setTimeout(() => {
          setMessageStatus("Send Message");
        }, 1500);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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
        size="md"
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
                      _hover={{ border: "2px solid black", bg: "#25D366" }}
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
                      _hover={{ border: "2px solid black", bg: "#FBBC05" }}
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
                    <FormControl isRequired id="name">
                      <FormLabel>Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input
                          type="text"
                          size="md"
                          placeholder="Your Full Name"
                          value={toSend.from_name}
                          name="from_name"
                          onChange={handleChange}
                        />
                        {toSend.from_name.length > 0 && (
                          <InputRightElement>
                            <CheckIcon color="green.500" />
                          </InputRightElement>
                        )}
                      </InputGroup>
                    </FormControl>
                    <FormControl id="contact" isRequired>
                      <FormLabel>Contact</FormLabel>
                      <Tabs variant="soft-rounded" colorScheme="blackAlpha">
                        <TabList>
                          <Tab>
                            <Icon
                              aria-label="email"
                              variant="ghost"
                              // size="lg"
                              // isRound={true
                              as={MdEmail}
                            />
                          </Tab>
                          <Tab>
                            <Icon
                              aria-label="whatsapp"
                              variant="ghost"
                              // size="lg"
                              // isRound={true}
                              as={BsWhatsapp}
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
                                placeholder="Your Email Address"
                                name="reply_to"
                                value={toSend.reply_to}
                                onChange={handleChange}
                              />
                              {emailReg.test(toSend.reply_to) && (
                                <InputRightElement>
                                  <CheckIcon color="green.500" />
                                </InputRightElement>
                              )}
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
                                placeholder="Your Whatsapp Number"
                                name="reply_to"
                                value={toSend.reply_to}
                                onChange={handleChange}
                              />
                              {toSend.reply_to.length >= 7 && (
                                <InputRightElement>
                                  <CheckIcon color="green.500" />
                                </InputRightElement>
                              )}
                            </InputGroup>
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                    </FormControl>
                    <FormControl id="message" isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        borderColor="gray.400"
                        _hover={{
                          borderRadius: "gray.400",
                        }}
                        placeholder="Message"
                        value={toSend.message}
                        name="message"
                        onChange={handleChange}
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
              bg={sendColorStatus}
              color="white"
              _hover={{ color: "gray.400" }}
              isLoading={isSending}
              onClick={onSubmit}
            >
              {messageStatus}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { ContactModal, ContactDrawer };
