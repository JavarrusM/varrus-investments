import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar, Spacer } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

import DefaultImage from "../assets/images/house.jpg";

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
    isVerified
  },
}) => {
  // test
  const [coverUrl, setCoverUrl] = useState(null);

  const storage = getStorage();

  // Create a reference under which you want to list
  const coverRef = ref(storage, `${name}/cover.jpg`);

  // const pathReference = ref(storage, 'images/stars.jpg');
  useEffect(() => {
    getDownloadURL(coverRef).then((url) => {
      // Insert url into an <img> tag to "download"
      setCoverUrl(url);
    });
  }, []);

  return (
  <Link href={`/property/${name}`} passHref>
    {/* {title} */}
    <Flex
      flexWrap="wrap"
      w="420px"
      p="S"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <img
          src={coverUrl}
          width={420}
          height={260}
          layout="intrinsic"
          alt="house"
        />
      </Box>
      <Box w="full">
        <Flex padding="1" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {millify(price)}
              {/* {rentFrequency && `/${rentFrequency}`} */}
            </Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url}/>
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
          <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
    {/* <Spacer/> */}
  </Link>
)};

export default Property;
