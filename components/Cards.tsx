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
      templateColumns="repeat(auto-fit, minmax(250px, 250px))"
      gap={5}
      justifyContent="center"
    >
      <Box rounded="md" borderWidth="1px" shadow="md" overflow="hidden">
        <Box w="100%">
          <Image
            src="https://img.freepik.com/psd-gratuitas/relogio-cor-laranja-marca-produto-midias-sociais-post-banner_154386-52.jpg?size=338&ext=jpg"
            width={450}
            height={450}
            layout="responsive"
            alt={configs.imageAlt}
            objectFit="cover"
          />
        </Box>
        <Box p={3} textAlign="center">
          <Heading
            fontSize="xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mt={1}
            noOfLines={1}
            fontWeight="semibold"
          >
            Terno Masculino Cinza
          </Heading>
          <Flex justify="center" align="center" mt={3}>
            <Heading fontSize="lg">R$ 79,90</Heading>
          </Flex>
          <Rating isCentered={true} />
          <Button
            size="sm"
            colorScheme={configs.buttons}
            leftIcon={<HiOutlineShoppingCart />}
            isFullWidth
            mt={3}
          >
            Adicionar ao Carrinho
          </Button>
        </Box>
      </Box>

      <Box rounded="md" borderWidth="1px" shadow="md" overflow="hidden">
        <Box w="100%">
          <Image
            src="https://img.freepik.com/psd-gratuitas/relogio-cor-laranja-marca-produto-midias-sociais-post-banner_154386-52.jpg?size=338&ext=jpg"
            width={450}
            height={450}
            layout="responsive"
            alt={configs.imageAlt}
            objectFit="cover"
          />
        </Box>
        <Box p={3} textAlign="center">
          <Heading
            fontSize="xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mt={1}
            noOfLines={1}
            fontWeight="semibold"
          >
            Terno Masculino Cinza
          </Heading>
          <Flex justify="center" align="center" mt={3}>
            <Heading fontSize="lg">R$ 79,90</Heading>
          </Flex>
          <Rating isCentered={true} />
          <Button
            size="sm"
            colorScheme={configs.buttons}
            leftIcon={<HiOutlineShoppingCart />}
            isFullWidth
            mt={3}
          >
            Adicionar ao Carrinho
          </Button>
        </Box>
      </Box>

      <Box rounded="md" borderWidth="1px" shadow="md" overflow="hidden">
        <Box w="100%">
          <Image
            src="https://img.freepik.com/psd-gratuitas/relogio-cor-laranja-marca-produto-midias-sociais-post-banner_154386-52.jpg?size=338&ext=jpg"
            width={450}
            height={450}
            layout="responsive"
            alt={configs.imageAlt}
            objectFit="cover"
          />
        </Box>
        <Box p={3} textAlign="center">
          <Heading
            fontSize="xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mt={1}
            noOfLines={1}
            fontWeight="semibold"
          >
            Terno Masculino Cinza
          </Heading>
          <Flex justify="center" align="center" mt={3}>
            <Heading fontSize="lg">R$ 79,90</Heading>
          </Flex>
          <Rating isCentered={true} />
          <Button
            size="sm"
            colorScheme={configs.buttons}
            leftIcon={<HiOutlineShoppingCart />}
            isFullWidth
            mt={3}
          >
            Adicionar ao Carrinho
          </Button>
        </Box>
      </Box>

      <Box rounded="md" borderWidth="1px" shadow="md" overflow="hidden">
        <Box w="100%">
          <Image
            src="https://img.freepik.com/psd-gratuitas/relogio-cor-laranja-marca-produto-midias-sociais-post-banner_154386-52.jpg?size=338&ext=jpg"
            width={450}
            height={450}
            layout="responsive"
            alt={configs.imageAlt}
            objectFit="cover"
          />
        </Box>
        <Box p={3} textAlign="center">
          <Heading
            fontSize="xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mt={1}
            noOfLines={1}
            fontWeight="semibold"
          >
            Terno Masculino Cinza
          </Heading>
          <Flex justify="center" align="center" mt={3}>
            <Heading fontSize="lg">R$ 79,90</Heading>
          </Flex>
          <Rating isCentered={true} />
          <Button
            size="sm"
            colorScheme={configs.buttons}
            leftIcon={<HiOutlineShoppingCart />}
            isFullWidth
            mt={3}
          >
            Adicionar ao Carrinho
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Cards;
