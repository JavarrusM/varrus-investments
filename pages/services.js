import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon, Image as ChakraImage } from "@chakra-ui/react";
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
import Service from "../components/Service";

const SERVICES = {
  RealEstate: [
    {
      name: "Real Estate Sales",
      ref: "/selling",
      cover:
        "https://firebasestorage.googleapis.com/v0/b/varrus-ee20f.appspot.com/o/services%2Fvarrus-properties-realtor-block.png?alt=media&token=8a9a5fbf-096b-44a1-bde5-ff163dfb72f8",
    },
    {
      name: "Property Management",
      ref: "/leasing",
      cover:
        "https://firebasestorage.googleapis.com/v0/b/varrus-ee20f.appspot.com/o/services%2Fvarrus-properties-management-block.png?alt=media&token=80fafa7f-ea41-4de1-9561-ccc6ad88d9eb",
    },
  ],
  Media: [
    {
      name: "Drone Filmography",
      ref: "/drone",
      cover:
        "https://firebasestorage.googleapis.com/v0/b/varrus-ee20f.appspot.com/o/services%2Fvarrus-media-drone-block.png?alt=media&token=39ca4025-6477-4f59-b044-c208ee29702c",
    },
    {
      name: "Virtual Photography",
      ref: "/virtual",
      cover:
        "https://firebasestorage.googleapis.com/v0/b/varrus-ee20f.appspot.com/o/services%2Fvarrus-media-photo-block.png?alt=media&token=0184a882-4dac-4133-9b63-4b695e81820e",
    },
  ],
};

export default function Properties({ properties }) {
  const varrusPropertiesLogoLink =
    "https://firebasestorage.googleapis.com/v0/b/varrus-ee20f.appspot.com/o/home%2Fvarrus-services-banner.png?alt=media&token=1f723338-87ec-4dcf-8053-3b0cc2369709";

  return (
    <>
      {/* <ChakraImage
        src={varrusPropertiesLogoLink}
        width="100vw"
        height={{ base: "10vh", md: "25vh" }}
        alt="Properties Logo"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      /> */}
      <Box height="fit-content" overflowY="auto" overflowX="hidden">
        <Text fontSize="2xl" p="4" fontWeight="bold">
          Properties {/*router.query.purpose*/}
        </Text>
        <Flex flexWrap="wrap" gridGap={2} p={3}>
          {properties.map((property) => (
            <Property property={property} key={property.name} />
          ))}
        </Flex>

        <Text fontSize="2xl" p="4" fontWeight="bold">
          Real Estate
        </Text>
        <Flex flexWrap="wrap" gridGap={2} p={3}>
          {SERVICES.RealEstate.map((service) => (
            <Service service={service} key={service.name} />
          ))}
        </Flex>

        <Text fontSize="2xl" p="4" fontWeight="bold">
          Media
        </Text>
        <Flex flexWrap="wrap" gridGap={2} p={3}>
          {SERVICES.Media.map((service) => (
            <Service service={service} key={service.name} />
          ))}
        </Flex>
      </Box>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const properties = [];
  const constraints = [];

  const q = firebaseQuery(collection(db, "properties"), limit(5));

  const docs = await getDocs(q);

  for (const doc of docs.docs) {
    properties.push(doc.data());
  }

  return {
    props: {
      properties: JSON.parse(JSON.stringify(properties)),
    },
  };
}
