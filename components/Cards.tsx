import { FC } from "react";
import { Grid, Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Image from "next/image";
import Rating from "./Rating";
import { configs } from "../configs/index";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Button } from "@chakra-ui/button";

const Cards: FC = () => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(300px, 300px))"
      gap={5}
      justifyContent="center"
    >
      <Box rounded="md" borderWidth="1px" shadow="md" overflow="hidden">
        <Box w="100%">
          <Image
            src="https://image.freepik.com/psd-gratuitas/promocao-de-produtos-e-modelo-de-banner-de-midia-social-para-maquina-de-passar-roupa_160623-152.jpg"
            width={600}
            height={600}
            layout="responsive"
            alt={configs.imageAlt}
          />
        </Box>
        <Box p={3}>
          <Rating />
          <Heading
            fontSize="xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mt={1}
            noOfLines={1}
          >
            Ferro de Passar
          </Heading>
          <Text fontSize="xs" mt={1} noOfLines={2}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
          <Flex justify="flex-start" align="center" mt={3}>
            <Button
              size="sm"
              colorScheme={configs.buttons}
              leftIcon={<HiOutlineShoppingCart />}
              mr={3}
            >
              Add ao Carrinho
            </Button>
            <Heading fontSize="lg">R$ 79,90</Heading>
          </Flex>
        </Box>
      </Box>

      <Box rounded="md" borderWidth="1px" shadow="md" overflow="hidden">
        <Box w="100%">
          <Image
            src="https://image.freepik.com/psd-gratuitas/promocao-de-produtos-e-modelo-de-banner-de-midia-social-para-maquina-de-passar-roupa_160623-152.jpg"
            width={600}
            height={600}
            layout="responsive"
            alt={configs.imageAlt}
          />
        </Box>
        <Box p={3}>
          <Rating />
          <Heading
            fontSize="xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mt={1}
            noOfLines={1}
          >
            Ferro de Passar
          </Heading>
          <Text fontSize="xs" mt={1} noOfLines={2}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
          <Flex justify="flex-start" align="center" mt={3}>
            <Button
              size="sm"
              colorScheme={configs.buttons}
              leftIcon={<HiOutlineShoppingCart />}
              mr={3}
            >
              Add ao Carrinho
            </Button>
            <Heading fontSize="lg">R$ 79,90</Heading>
          </Flex>
        </Box>
      </Box>

      <Box rounded="md" borderWidth="1px" shadow="md" overflow="hidden">
        <Box w="100%">
          <Image
            src="https://image.freepik.com/psd-gratuitas/promocao-de-produtos-e-modelo-de-banner-de-midia-social-para-maquina-de-passar-roupa_160623-152.jpg"
            width={600}
            height={600}
            layout="responsive"
            alt={configs.imageAlt}
          />
        </Box>
        <Box p={3}>
          <Rating />
          <Heading
            fontSize="xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mt={1}
            noOfLines={1}
          >
            Ferro de Passar
          </Heading>
          <Text fontSize="xs" mt={1} noOfLines={2}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
          <Flex justify="flex-start" align="center" mt={3}>
            <Button
              size="sm"
              colorScheme={configs.buttons}
              leftIcon={<HiOutlineShoppingCart />}
              mr={3}
            >
              Add ao Carrinho
            </Button>
            <Heading fontSize="lg">R$ 79,90</Heading>
          </Flex>
        </Box>
      </Box>
    </Grid>
  );
};

export default Cards;
