import React, { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import DefaultImage from "../asset/images/house.webp";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignContent="center">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={scrollPrev}
        fontSize="2xl"
        cursor="pointer"
      ></Icon>
    </Flex>
  );
};
const RightArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignContent="center" mar>
      <Icon
        as={FaArrowCircleRight}
        onClick={scrollPrev}
        fontSize="2xl"
        cursor="pointer"
      ></Icon>
    </Flex>
  );
};

const ImageScrollBar = ({ data }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          width="910px"
          itemId={item.id}
          overflow="hidden"
          p="1"
          key={item.id}
        >
          <Image
            placeholder="blur"
            blurDataURL={item.url}
            src={DefaultImage}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            alt="property"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageScrollBar;
