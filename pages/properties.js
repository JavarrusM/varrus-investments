import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import noresult from "../assets/images/noresult.svg";
import { fetchApi, baseUrl } from "../utils/fetchApi";

import db from "/utils/firebase";

import {
  collection,
  onSnapshot,
  where,
  query as firebaseQuery,
  limit,
  getDocs,
  orderBy,
} from "firebase/firestore";

export default function Properties({ properties }) {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box height="fit-content" overflowY="auto" overflowX="hidden">
      <Flex
        cursor="pointer"
        bg="gray.300"
        borderBottom="1px"
        borderColor="gray.200"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        p="2"
        fontWeight="black"
        fontSize="large"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Property By Filter</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>

      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {/*router.query.purpose*/}
      </Text>
      <Flex flexWrap="wrap" gridGap={2} p={3}>
        {properties.map((property) => (
          <Property property={property} key={property.name} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image alt="no reslt" src={noresult} />
          <Text fontSize="2xl" marginTop="3">
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  );
}

export async function getServerSideProps({ query }) {
  const properties = [];
  const constraints = [];

  const purpose = query.purpose || "any";
  // const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || 0;
  const maxPrice = query.maxPrice || "none";
  const roomsMin = query.roomsMin || 0;
  const bathsMin = query.bathsMin || 0;
  const sort =
    query.sort && query.sort !== "none" ? query.sort.split("-") : "none";
  const areaMax = query.areaMax || 35000;
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const type = query.type || "any";
  const isVerified = query.isVerified || "any";
  const furnishingStatus = query.furnishingStatus || "any";

  if (sort != "none") constraints.push(orderBy(sort[0], sort[1]));

  const q = firebaseQuery(collection(db, "properties"), ...constraints);

  const docs = await getDocs(q);

  for (const doc of docs.docs) {
    // docs.forEach((doc) => {
    if (doc.data().baths < Number(bathsMin) && type !== "land") continue;
    if (doc.data().rooms < Number(roomsMin) && type !== "land") continue;
    if (doc.data().price < Number(minPrice)) continue;
    if (maxPrice !== "none" && doc.data().price > Number(maxPrice)) continue;

    if (purpose != "any" && doc.data().purpose !== purpose) continue;
    if (type != "any" && doc.data().type !== type) continue;
    if (
      isVerified != "any" &&
      doc.data().isVerified !== (isVerified == "true" ? true : false)
    )
      continue;
    if (
      furnishingStatus != "any" &&
      doc.data().furnishingStatus !== furnishingStatus
    )
      continue;

    properties.push(doc.data());
  }

  return {
    props: {
      properties: JSON.parse(JSON.stringify(properties)),
    },
  };
}
