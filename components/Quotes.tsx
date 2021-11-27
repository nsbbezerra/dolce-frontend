import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import { FC } from "react";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";
import Image from "next/image";
import { configs } from "../configs";
import Rating from "./Rating";
import { FaQuoteRight } from "react-icons/fa";
import Icon from "@chakra-ui/icon";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconButton } from "@chakra-ui/button";

const Quotes: FC = () => {
  const CustomArrow = ({ type, onClick, isEdge }: RenderArrowProps) => {
    const pointer =
      type === "PREV" ? <IoIosArrowBack /> : <IoIosArrowForward />;
    return (
      <IconButton
        onClick={onClick}
        disabled={isEdge}
        aria-label="Search database"
        icon={pointer}
        fontSize="3xl"
        variant="link"
        colorScheme={configs.buttons}
        _focus={{ outline: "none" }}
      />
    );
  };

  return (
    <Carousel
      isRTL={false}
      itemsToShow={3}
      itemsToScroll={3}
      renderArrow={CustomArrow}
      itemPadding={[8, 8]}
      renderPagination={({ pages, activePage, onClick }) => {
        return (
          <Flex mt={3}>
            {pages.map((page) => {
              const isActivePage = activePage === page;
              return (
                <Box
                  w="15px"
                  h="15px"
                  shadow="sm"
                  bg={isActivePage ? "yellow.400" : "yellow.100"}
                  key={page}
                  onClick={() => onClick(page.toString())}
                  borderRadius="50%"
                  mr={1}
                />
              );
            })}
          </Flex>
        );
      }}
    >
      <Box
        rounded="md"
        shadow="md"
        borderWidth="1px"
        bg={useColorModeValue("white", "whiteAlpha.200")}
        w="280px"
        p={3}
        h="min-content"
      >
        <Flex justify="space-between" align="center">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading fontSize="sm">Natanael Bezerra</Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.400", "whiteAlpha.300")}
          />
        </Flex>
        <Text mt={3} fontSize="sm">
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo
          de texto legível de uma página quando estiver examinando sua
          diagramação.
        </Text>
      </Box>
      <Box
        rounded="md"
        shadow="md"
        borderWidth="1px"
        bg={useColorModeValue("white", "whiteAlpha.200")}
        w="280px"
        p={3}
        h="min-content"
      >
        <Flex justify="space-between" align="center">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading fontSize="sm">Natanael Bezerra</Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.400", "whiteAlpha.300")}
          />
        </Flex>
        <Text mt={3} fontSize="sm">
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo
          de texto legível de uma página quando estiver examinando sua
          diagramação.
        </Text>
      </Box>
      <Box
        rounded="md"
        shadow="md"
        borderWidth="1px"
        bg={useColorModeValue("white", "whiteAlpha.200")}
        w="280px"
        p={3}
        h="min-content"
      >
        <Flex justify="space-between" align="center">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading fontSize="sm">Natanael Bezerra</Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.400", "whiteAlpha.300")}
          />
        </Flex>
        <Text mt={3} fontSize="sm">
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo
          de texto legível de uma página quando estiver examinando sua
          diagramação.
        </Text>
      </Box>
      <Box
        rounded="md"
        shadow="md"
        borderWidth="1px"
        bg={useColorModeValue("white", "whiteAlpha.200")}
        w="280px"
        p={3}
        h="min-content"
      >
        <Flex justify="space-between" align="center">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading fontSize="sm">Natanael Bezerra</Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.400", "whiteAlpha.300")}
          />
        </Flex>
        <Text mt={3} fontSize="sm">
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo
          de texto legível de uma página quando estiver examinando sua
          diagramação.
        </Text>
      </Box>
      <Box
        rounded="md"
        shadow="md"
        borderWidth="1px"
        bg={useColorModeValue("white", "whiteAlpha.200")}
        w="280px"
        p={3}
        h="min-content"
      >
        <Flex justify="space-between" align="center">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading fontSize="sm">Natanael Bezerra</Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.400", "whiteAlpha.300")}
          />
        </Flex>
        <Text mt={3} fontSize="sm">
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo
          de texto legível de uma página quando estiver examinando sua
          diagramação.
        </Text>
      </Box>
      <Box
        rounded="md"
        shadow="md"
        borderWidth="1px"
        bg={useColorModeValue("white", "whiteAlpha.200")}
        w="280px"
        p={3}
        h="min-content"
      >
        <Flex justify="space-between" align="center">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading fontSize="sm">Natanael Bezerra</Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.400", "whiteAlpha.300")}
          />
        </Flex>
        <Text mt={3} fontSize="sm">
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo
          de texto legível de uma página quando estiver examinando sua
          diagramação.
        </Text>
      </Box>
    </Carousel>
  );
};

export default Quotes;
