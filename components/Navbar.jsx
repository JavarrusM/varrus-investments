// import Link from "next/link";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

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

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
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
            Varrus
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
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
          </Button>
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
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
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
      ))}
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
        href={href ?? "#"}
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

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

const NAV_ITEMS = [
  {
    label: "Properties",
    children: [
      {
        label: "Buying",
        subLabel: "Buy a Home or Invest",
        href: "#",
      },
      {
        label: "Selling",
        subLabel: "Sell Land and/or Houses",
        href: "#",
      },
    ],
  },
  {
    label: "Rentals",
    children: [
      {
        label: "Renting",
        subLabel: "Explore Our Rental Offerings",
        href: "#",
      },
      {
        label: "Leasing",
        subLabel: "Lease With Our Property Management Team",
        href: "#",
      },
    ],
  },
  {
    label: "Photography",
    href: "#",
    children: [
      {
        label: "Virtual Tours",
        subLabel: "3D Real Estate Tour Hosting Services",
        href: "#",
      },
      {
        label: "3D Photos",
        subLabel: "3D Real Estate Photos Services (by room)",
        href: "#",
      },
      {
        label: "Drone Photos",
        subLabel: "Drone Real Estate Photo Services",
        href: "#",
      },
      {
        label: "Drone Videos",
        subLabel: "Drone Real Estate Video Services",
        href: "#",
      },
    ],
  },
  {
    label: "Maintenance",
    href: "#",
    children: [
      {
        label: "House Repairs",
        subLabel: "Lease With Our Property Management Team",
        href: "#",
      },
      {
        label: "Painting",
        subLabel: "",
        href: "#",
      },
      {
        label: "Plumbing",
        subLabel: "Lease With Our Property Management Team",
        href: "#",
      },
    ],
  },
  {
    label: "Construction",
    subLabel: "Build Houses at Affordable Prices",
    href: "#",
  },
  {
    label: "Lending",
    subLabel: "Explore our Lending Terms & Services",
    href: "#",
  },
];

// const Navbar = () => (
//   <Flex p="2" borderBottom="1px" borderColor="gray.100">
//     <Box fontSize="3x1" color="blue.400" fontWeight="bold">
//       <Link href="/" paddingLeft="2">
//         Varrus
//       </Link>
//     </Box>
//     <Spacer />
//     <Box>
//       <Menu>
//         <MenuButton
//           as={IconButton}
//           icon={<FcMenu />}
//           variant="outline"
//           color="red.100"
//         />
//         <MenuList>
//           <Link href="/" passHref>
//             <MenuItem icon={<FcHome />}>Home</MenuItem>
//           </Link>
//           <Link href="/search" passHref>
//             <MenuItem icon={<BsSearch />}>Search</MenuItem>
//           </Link>
//           <Link href="/search?purpose-for-sale" passHref>
//             <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
//           </Link>
//           <Link href="/search?purpose-for-rent" passHref>
//             <MenuItem icon={<FcAbout />}>Rent Property</MenuItem>
//           </Link>
//         </MenuList>
//       </Menu>
//     </Box>
//   </Flex>
// );
