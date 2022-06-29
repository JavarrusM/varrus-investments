import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex, Text, Button } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollBar = ({ data }) => (
  <>
    {/* <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    > */}
      {data.map((item, idx) => {
        return (
          <Box as={item.type} src={item.url} key={idx} width="full" height="75vh" itemID={idx}>
            {/* {item.tpe === "photo" && (
              <Image
                alt="property"
                placeholder="blur"
                blurDataURL={item.url}
                src={item.url}
                width={1000}
                height={500}
                sizes="(max-width:500px) 100px, (max-width):1023px 400px, 1000px"
              />
            )}
            {item.tpe === "3d" && (
              <iframe
                width="100%"
                height="640"
                frameBorder="0"
                allowFullScreen
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                scrolling="no"
                src={item.url}
              />
            )}
            {item.tpe === "3d" && (
              <iframe
                width="100%"
                height="640"
                frameBorder="0"
                allowFullScreen
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                scrolling="no"
                src={item.url}
              />
            )} */}
          </Box>
        );
      })}
    {/* </ScrollMenu> */}
    {/* <span> */}
    <Flex justify={"end"}>
      <Text as="cite" fontSize={"sm"} textAlign="end">
        Powered by Varrus Services Media{" "}
        <Button
          cursor="pointer"
          as="cite"
          variant={"link"}
          colorScheme={"blue"}
          size={"sm"}
        >
          Learn more
        </Button>
      </Text>
    </Flex>
    {/* </span> */}
  </>
);

export default ImageScrollBar;
