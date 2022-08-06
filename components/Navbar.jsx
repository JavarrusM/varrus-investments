// import Link from "next/link";
import { useRouter } from "next/router";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { Divider } from "@chakra-ui/react";

import Image from "next/image";

import VarrusLogoBlack from "../assets/images/varrus-logo-black.png";
import VarrusFullLogoBlack from "../assets/images/varrus-full-logo-black.png";

import {
  Box,
  Link,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import ContactDrawer from "./Contact/ContactDrawer";

export default function Navbar() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const [contactDrawerToggle, setContactDrawerToggle] = useState(false);

  const handleContactDrawerToggle = () => {
    setContactDrawerToggle((prev) => !prev);
  };

  const path = useRouter().pathname;

  const position = path === "/" ? "fixed" : "relative";

  return (
    <Box position={position} width="100%" zIndex={3}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        // minH={"60px"}
        height="10vh"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link
              p={2}
              fontSize={"lg"}
              fontWeight={500}
              color={"black"}
              _hover={{
                textDecoration: "none",
                color: "black",
              }}
              href={"/"}
              display="flex"
              alignItems="flex-end"
              gap="2"
            >
              <Image
                src={VarrusLogoBlack}
                alt="Varrus logo black"
                width={25}
                height={25}
              />
              VARRUS
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          {/* <Link
            href="/contact"
            _hover={{
              textDecoration: "none",
              // bg: "gray.400",
            }} 
          >*/}
          <Button
            display={{ md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color="white"
            bg="black"
            onClick={handleContactDrawerToggle}
            _hover={{
              textDecoration: "none",
              bg: "gray.400",
            }}
          >
            Contact Us
          </Button>
          <ContactDrawer
            contactDrawerToggle={contactDrawerToggle}
            handleContactDrawerToggle={handleContactDrawerToggle}
          />
          {/* </Link> */}
          {/* <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"gray.400"}
            href={"#"}
            _hover={{
              bg: "gray.300",
            }}
          >
            Sign Up
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {/* <Divider
            orientation="vertical"
            borderWidth="1px"
            borderColor="black"
            shadow="lg"
            key={`${navItem.label}` + "divider"}
          /> */}
          <Box>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"lg"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.subLabel && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    <DesktopSubNav key={navItem} {...navItem} />
                  </Stack>
                </PopoverContent>
              )}

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        </Box>
      ))}
      {/* <Divider
        orientation="vertical"
        borderWidth="1px"
        borderColor="black"
        shadow="lg"
      /> */}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.100", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "gray.900" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"gray.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        // href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Properties",
    href: "/properties",
    children: [
      {
        label: "Buying",
        subLabel: "Buy a home or invest",
        href: "/properties?purpose=buying",
      },
      {
        label: "Selling",
        subLabel: "Sell land and/or houses",
        href: "/selling",
      },
      {
        label: "Renting",
        subLabel: "Explore our rental offerings",
        href: "/properties?purpose=renting",
      },
      {
        label: "Leasing",
        subLabel: "Lease with our property management team",
        href: "/leasing",
      },
    ],
  },
  {
    label: "Media",
    // href: "/media",
    children: [
      {
        label: "Virtual",
        subLabel: "3D real estate tours, pictures and hosting services",
        href: "/media/virtual",
      },
      {
        label: "Drone",
        subLabel: "Drone real estate photo and video services",
        href: "/media/drone",
      },
    ],
  },
  {
    label: "Maintenance",
    // href: "/maintenance",
    children: [
      {
        label: "House Repairs",
        subLabel: "Quality repair personnel with expert supervision",
        href: "/maintenance/repairs",
      },
      {
        label: "Waste Management",
        subLabel: "Residential and apartment trash pickup",
        href: "/maintenance/waste",
      },
      {
        label: "Cleaning",
        subLabel: "Schedule cleaning services",
        href: "/maintenance/cleaning",
      },
    ],
  },
  {
    label: "Construction",
    // href: "/construction",
    children: [
      {
        label: "General Construction",
        subLabel: "Build housing at affordable prices",
        href: "/construction/general",
      },
      {
        label: "Renovations",
        subLabel: "Restoring properties to their former glory",
        href: "/construction/renovations",
      },
    ],
  },
  // {
  //   label: "Legal",
  //   // href: "/legal",
  //   children: [
  //     {
  //       label: "Consultations",
  //       subLabel: "Discuss real estate legalitiies with verified attorneys",
  //       href: "/legal/consultations",
  //     },
  //     {
  //       label: "Escrow",
  //       subLabel: "Lock your transaction funds with our escrow services",
  //       href: "/legal/escrow",
  //     },
  //   ],
  // },
  // {
  //   label: "Lending",
  //   href: "/lending",
  //   children: [
  //     {
  //       label: "Personal Loans",
  //       subLabel: "Explore your personal loan options",
  //       href: "/lending?purpose=personal",
  //     },
  //     {
  //       label: "Mortgage Loans",
  //       subLabel: "Expore your mortgage loan options",
  //       href: "/lending?purpose=mortgage",
  //     },
  //   ],
  // },
];
