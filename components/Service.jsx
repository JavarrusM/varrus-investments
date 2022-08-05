import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Spacer,
  Image as ChakraImage,
  Stack,
  Heading,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import VarrusLogoBlack from "../assets/images/varrus-logo-black.png";

const Service = ({ service: { ref, cover, name } }) => {
  const storage = getStorage();
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Link href={`${ref}`} passHref>
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"275px"}
            cursor="pointer"
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${cover})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(30px) brightness(80%)",
              },
            }}
          >
            <ChakraImage
              rounded={"lg"}
              height={275}
              width={325}
              objectFit={"cover"}
              src={cover}
            />
          </Box>
        </Link>
        <Stack pt={10} align={"center"}>
          <Heading
            color={"gray.500"}
            fontSize={"xl"}
            fontFamily={"body"}
            textTransform={"uppercase"}
          >
            {name}
          </Heading>
          {/* <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Nice Chair, pink
          </Heading> */}
          {/* <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack> */}
        </Stack>
      </Box>
    </Center>
  );

  return (
    <Link href={`${ref}`} passHref>
      <Flex
        flexWrap="wrap"
        w={{ base: "100%", lg: "420px" }}
        p="S"
        paddingTop="0"
        justifyContent="flex-start"
        cursor="pointer"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
        <Box>
          <ChakraImage
            src={cover}
            width={{ base: "100%", lg: 420 }}
            height={{ lg: 260 }}
            layout="intrinsic"
            alt="house"
            roundedTop="lg"
          />
        </Box>
        <Flex justifyContent="center" p="3" w="full">
          <Text fontWeight={500} fontSize="3xl">
            {name}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Service;
