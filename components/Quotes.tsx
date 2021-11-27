import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import { FC } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import Image from "next/image";
import { configs } from "../configs";
import Rating from "./Rating";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { FaQuoteRight } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Quotes: FC = () => {
  return (
    <Carousel
      show={3.5}
      slide={3}
      swiping={true}
      leftArrow={
        <Flex align="center" h="100%" p={3}>
          <Icon as={IoIosArrowBack} cursor="pointer" />
        </Flex>
      }
      rightArrow={
        <Flex align="center" h="100%" p={3}>
          <Icon as={IoIosArrowForward} cursor="pointer" />
        </Flex>
      }
    >
      <Box
        w="270px"
        h="min-content"
        borderWidth="1px"
        rounded="md"
        shadow="md"
        background={"whiteAlpha.200"}
      >
        <Flex p={2} align="center" justify="space-between">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                width={300}
                height={300}
                layout="responsive"
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading
                fontSize="sm"
                color={useColorModeValue(
                  configs.titles.light,
                  configs.titles.dark
                )}
              >
                Natanael Bezerra
              </Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.300", "whiteAlpha.300")}
          />
        </Flex>
        <Box p={2} textAlign="left">
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
            consequuntur repellendus aperiam deserunt nihil, corporis fugit
            voluptatibus voluptate totam neque illo placeat eius quis laborum
            aspernatur quibusdam. Ipsum, magni.
          </Text>
        </Box>
      </Box>
      <Box
        w="270px"
        h="min-content"
        borderWidth="1px"
        rounded="md"
        shadow="md"
        background={"whiteAlpha.200"}
      >
        <Flex p={2} align="center" justify="space-between">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                width={300}
                height={300}
                layout="responsive"
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading
                fontSize="sm"
                color={useColorModeValue(
                  configs.titles.light,
                  configs.titles.dark
                )}
              >
                Natanael Bezerra
              </Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.300", "whiteAlpha.300")}
          />
        </Flex>
        <Box p={2}>
          <Text fontSize="sm" textAlign="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
            consequuntur repellendus aperiam deserunt nihil, corporis fugit
            voluptatibus voluptate totam neque illo placeat eius quis laborum
            aspernatur quibusdam. Ipsum, magni.
          </Text>
        </Box>
      </Box>
      <Box
        w="270px"
        h="min-content"
        borderWidth="1px"
        rounded="md"
        shadow="md"
        background={"whiteAlpha.200"}
      >
        <Flex p={2} align="center" justify="space-between">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                width={300}
                height={300}
                layout="responsive"
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading
                fontSize="sm"
                color={useColorModeValue(
                  configs.titles.light,
                  configs.titles.dark
                )}
              >
                Natanael Bezerra
              </Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.300", "whiteAlpha.300")}
          />
        </Flex>
        <Box p={2}>
          <Text fontSize="sm" textAlign="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
            consequuntur repellendus aperiam deserunt nihil, corporis fugit
            voluptatibus voluptate totam neque illo placeat eius quis laborum
            aspernatur quibusdam. Ipsum, magni.
          </Text>
        </Box>
      </Box>

      <Box
        w="270px"
        h="min-content"
        borderWidth="1px"
        rounded="md"
        shadow="md"
        background={"whiteAlpha.200"}
      >
        <Flex p={2} align="center" justify="space-between">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                width={300}
                height={300}
                layout="responsive"
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading
                fontSize="sm"
                color={useColorModeValue(
                  configs.titles.light,
                  configs.titles.dark
                )}
              >
                Natanael Bezerra
              </Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.300", "whiteAlpha.300")}
          />
        </Flex>
        <Box p={2}>
          <Text fontSize="sm" textAlign="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
            consequuntur repellendus aperiam deserunt nihil, corporis fugit
            voluptatibus voluptate totam neque illo placeat eius quis laborum
            aspernatur quibusdam. Ipsum, magni.
          </Text>
        </Box>
      </Box>

      <Box
        w="270px"
        h="min-content"
        borderWidth="1px"
        rounded="md"
        shadow="md"
        background={"whiteAlpha.200"}
      >
        <Flex p={2} align="center" justify="space-between">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                width={300}
                height={300}
                layout="responsive"
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading
                fontSize="sm"
                color={useColorModeValue(
                  configs.titles.light,
                  configs.titles.dark
                )}
              >
                Natanael Bezerra
              </Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.300", "whiteAlpha.300")}
          />
        </Flex>
        <Box p={2}>
          <Text fontSize="sm" textAlign="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
            consequuntur repellendus aperiam deserunt nihil, corporis fugit
            voluptatibus voluptate totam neque illo placeat eius quis laborum
            aspernatur quibusdam. Ipsum, magni.
          </Text>
        </Box>
      </Box>

      <Box
        w="270px"
        h="min-content"
        borderWidth="1px"
        rounded="md"
        shadow="md"
        background={"whiteAlpha.200"}
      >
        <Flex p={2} align="center" justify="space-between">
          <HStack>
            <Box w="60px" h="60px" rounded="full" overflow="hidden">
              <Image
                width={300}
                height={300}
                layout="responsive"
                alt={configs.imageAlt}
                src="https://image.freepik.com/free-photo/front-view-person-with-short-hair_23-2148749599.jpg"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Heading
                fontSize="sm"
                color={useColorModeValue(
                  configs.titles.light,
                  configs.titles.dark
                )}
              >
                Natanael Bezerra
              </Heading>
              <Rating />
            </Box>
          </HStack>
          <Icon
            as={FaQuoteRight}
            fontSize="4xl"
            color={useColorModeValue("blackAlpha.300", "whiteAlpha.300")}
          />
        </Flex>
        <Box p={2}>
          <Text fontSize="sm" textAlign="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
            consequuntur repellendus aperiam deserunt nihil, corporis fugit
            voluptatibus voluptate totam neque illo placeat eius quis laborum
            aspernatur quibusdam. Ipsum, magni.
          </Text>
        </Box>
      </Box>
    </Carousel>
  );
};

export default Quotes;
