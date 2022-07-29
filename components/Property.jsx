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

const Property = ({
  property: {
    name,
    price,
    rentFrequency,
    title,
    rooms,
    baths,
    area,
    agency,
    isVerified,
    coverUrl,
  },
}) => {
  const storage = getStorage();

  return (
    <Link href={`/properties/${name}`} passHref>
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
            src={coverUrl}
            width={{ base: "100%", lg: 420 }}
            height={{ lg: 260 }}
            layout="intrinsic"
            alt="house"
            roundedTop="lg"
          />
        </Box>
        <Box p="3" w="full">
          <Flex padding="1" alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                DOP {millify(price)}
                {/* {rentFrequency && `/${rentFrequency}`} */}
              </Text>
            </Flex>
            <Box>
              <Image
                src={VarrusLogoBlack}
                alt="varrus logo black"
                width={25}
                height={25}
              />
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            // p="1"
            justifyContent="space-between"
            w="200px"
            color="blue.400"
          >
            <Flex alignItems="center" flexDir="row" gap="1">
              {rooms ? rooms : "-"} <FaBed />
            </Flex>{" "}
            |{" "}
            <Flex alignItems="center" flexDir="row" gap="1">
              {baths ? baths : "-"} <FaBath />
            </Flex>{" "}
            |{" "}
            <Flex alignItems="center" flexDir="row" gap="1">
              {area > 0 ? millify(area) : "-"} sqm <BsGridFill />
            </Flex>
          </Flex>
          <Text fontSize="lg">
            {title && title.length > 30
              ? `${title.substring(0, 30)}...`
              : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
