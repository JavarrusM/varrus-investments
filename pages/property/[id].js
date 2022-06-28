import { useEffect, useState } from "react";

import { Box, Flex, Spacer, Text, Avatar, Link } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import Image from "next/image";
import VarrusLogoGreen from "../../assets/images/varrus-logo-green.png";
import VarrusLogoBlack from "../../assets/images/varrus-logo-black.png";

import db from "/utils/firebase";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import {
  doc,
  collection,
  onSnapshot,
  where,
  query as firebaseQuery,
  limit,
  getDocs,
} from "firebase/firestore";

import ImageScrollBar from "../../components/ImageScrollBar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    name,
    media,
  },
}) => {
  //
  // useEffect(() => {

  // }, []);

  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {media && <ImageScrollBar data={media} />}
      <Box w="full" p="6">
        <Flex padding="1" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400" alignSelf={"end"}>
              {isVerified && (
                <Image
                  src={VarrusLogoGreen}
                  alt="varrus green verfied logo"
                  width={15}
                  height={15}
                />
              )}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              DOP {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Image
              size="sm"
              src={VarrusLogoBlack}
              alt="agency icons"
              width={25}
              height={25}
            />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms ? rooms : "-"} <FaBed /> | {baths ? baths : "-"} <FaBath /> |{" "}
          {millify(area)} sqm <BsGridFill />
        </Flex>
        <Box marginTop="2">
          <Text fontSize="lg" marginBottom="2" fontWeight="bold">
            {title}
          </Text>
          <Text lineHeight="2" color="gray.600">
            {description}
          </Text>
        </Box>
        <Flex
          flexWrap="wrap"
          textTransform="uppercase"
          justifyContent="space-between"
        >
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box>
          {amenities.length && (
            <Text fontSize="2xl" fontWeight="black" marginTop="5">
              Amenities
            </Text>
          )}
          <Flex flexWrap="wrap">
            {amenities.map((amenity) => (
              <Text
                fontWeight="bold"
                color="blue.400"
                fontSize="l"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
                key={amenity.name}
              >
                {amenity.link ? (
                  <Link href={amenity.link}>{amenity.name}</Link>
                ) : (
                  amenity.name
                )}
              </Text>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const properties = [];
  const photos = [];

  const q = firebaseQuery(
    collection(db, "Properties"),
    where("name", "==", id)
  );

  const docs = await getDocs(q);

  const storage = getStorage();
  const listRef = ref(storage, `${id}/`);
  const photoList = await listAll(listRef);

  photoList.items.forEach((itemRef) => {
    getDownloadURL(itemRef).then((url) => photos.push(url));
  });

  console.log(photoList)

  docs.forEach((doc) => {
    properties.push({ ...doc.data()});
  });

  console.log(properties);

  return {
    props: {
      propertyDetails: JSON.parse(JSON.stringify(properties[0])),
    },
  };
}
