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
