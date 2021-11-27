import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Header from "../components/Header";
import { configs } from "../configs";
import Image from "next/image";
import { FaShippingFast, FaQuoteRight } from "react-icons/fa";
import { HiArrowRight, HiCurrencyDollar, HiPhone } from "react-icons/hi";
import Icon from "@chakra-ui/icon";
import { Button } from "@chakra-ui/button";
import Quotes from "../components/Quotes";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />

      <Container maxW="5xl" mt={20}>
        <Flex
          justify="center"
          align="center"
          textAlign="center"
          direction="column"
          mb={10}
        >
          <Text
            fontWeight="bold"
            fontSize="lg"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
          >
            Nossos Produtos
          </Text>
          <Heading fontSize="3xl">Os mais Populares</Heading>
        </Flex>

        <Cards />
      </Container>

      <Box
        bg={useColorModeValue(configs.jumbotron.light, configs.jumbotron.dark)}
        pt={10}
        pb={10}
        mt={20}
      >
        <Container maxW="6xl">
          <Grid
            templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 2fr", "1fr 2fr"]}
            gap={20}
            alignItems="center"
            justifyContent="center"
            justifyItems="center"
          >
            <Box w="100%" maxW="350px">
              <Image
                src="/img/moda.webp"
                width={600}
                height={600}
                layout="responsive"
                objectFit="cover"
                alt={configs.imageAlt}
              />
            </Box>
            <Box>
              <Heading
                color={useColorModeValue(
                  configs.titles.light,
                  configs.titles.dark
                )}
              >
                Porque comprar conosco?
              </Heading>
              <Text mt={5} textAlign="justify">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for lorem ipsum
                will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).
              </Text>

              <Grid
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                gap={2}
                mt={10}
              >
                <Flex
                  rounded="md"
                  pr={3}
                  pl={3}
                  pt={4}
                  pb={4}
                  justify="center"
                  align="center"
                  w="100%"
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                >
                  <Icon
                    as={FaShippingFast}
                    fontSize="3xl"
                    color={useColorModeValue(
                      configs.titles.light,
                      configs.titles.dark
                    )}
                    mr={2}
                  />
                  <Text fontSize="sm" fontWeight="bold">
                    Rápida Entrega
                  </Text>
                </Flex>
                <Flex
                  rounded="md"
                  pr={3}
                  pl={3}
                  pt={4}
                  pb={4}
                  justify="center"
                  align="center"
                  w="100%"
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                >
                  <Icon
                    as={HiCurrencyDollar}
                    fontSize="3xl"
                    color={useColorModeValue(
                      configs.titles.light,
                      configs.titles.dark
                    )}
                    mr={2}
                  />
                  <Text fontSize="sm" fontWeight="bold">
                    Pagamento Seguro
                  </Text>
                </Flex>
                <Flex
                  rounded="md"
                  pr={3}
                  pl={3}
                  pt={4}
                  pb={4}
                  justify="center"
                  align="center"
                  w="100%"
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                >
                  <Icon
                    as={HiPhone}
                    fontSize="3xl"
                    color={useColorModeValue(
                      configs.titles.light,
                      configs.titles.dark
                    )}
                    mr={2}
                  />
                  <Text fontSize="sm" fontWeight="bold">
                    Rápido Atendimento
                  </Text>
                </Flex>
              </Grid>

              <Button
                rightIcon={<HiArrowRight />}
                colorScheme={configs.buttons}
                mt={5}
                size="sm"
              >
                Leia Mais
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Container mt={20} maxW="6xl">
        <Flex
          justify="center"
          align="center"
          textAlign="center"
          direction="column"
          mb={10}
        >
          <Text
            fontWeight="bold"
            fontSize="lg"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
          >
            Novidades!
          </Text>
          <Heading fontSize="3xl">Os mais Recentes</Heading>
        </Flex>

        <Cards />
      </Container>

      <Box
        bg={useColorModeValue(configs.jumbotron.light, configs.jumbotron.dark)}
        pt={10}
        pb={10}
        mt={20}
      >
        <Container maxW="6xl">
          <Flex
            justify="center"
            align="center"
            textAlign="center"
            direction="column"
            mb={10}
          >
            <Text
              fontWeight="bold"
              fontSize="lg"
              color={useColorModeValue(
                configs.titles.light,
                configs.titles.dark
              )}
            >
              Avaliações de Nossos Clientes
            </Text>
            <Heading fontSize="3xl">Os que eles dizem</Heading>
          </Flex>

          <Quotes />
        </Container>
      </Box>
    </>
  );
};

export default Home;
