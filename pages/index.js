import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
