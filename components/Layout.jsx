import Head from "next/head";
import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Varrus</title>
    </Head>
    <nav>
      <Navbar />
    </nav>
    <Box height="fit-content" minHeight="95vh"  m="auto">{children}</Box>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Layout;
