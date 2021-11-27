import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import type { NextPage } from "next";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Header from "../components/Header";
import { configs } from "../configs";
import Image from "next/image";
import { FaShippingFast } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import {
  HiArrowRight,
  HiCurrencyDollar,
  HiPhone,
  HiOutlineMap,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import Icon from "@chakra-ui/icon";
import { Button } from "@chakra-ui/button";
import Quotes from "../components/Quotes";
import Promo from "../components/Promo";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Promo />
      <Container maxW="6xl" mt={10}>
        <Flex
          justify="center"
          align="center"
          direction={["column", "row", "row", "row", "row"]}
          textAlign="center"
          mb={10}
        >
          <Heading
            fontSize="3xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mr={2}
          >
            Produtos
          </Heading>
          <Heading fontSize="3xl">Exclusivos</Heading>
        </Flex>

        <Cards />

        <Center>
          <Button
            rightIcon={<HiArrowRight />}
            colorScheme={configs.buttons}
            variant="outline"
            mt={10}
          >
            Mais Produtos
          </Button>
        </Center>
      </Container>

      <Box
        bg={useColorModeValue(configs.jumbotron.light, configs.jumbotron.dark)}
        pt={10}
        pb={10}
        mt={10}
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

      <Container maxW="6xl" mt={10}>
        <Flex
          justify="center"
          align="center"
          direction={["column", "row", "row", "row", "row"]}
          textAlign="center"
          mb={10}
        >
          <Heading
            fontSize="3xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mr={2}
          >
            Novidades que
          </Heading>
          <Heading fontSize="3xl">Chegaram Pra Você</Heading>
        </Flex>

        <Cards />

        <Center>
          <Button
            rightIcon={<HiArrowRight />}
            colorScheme={configs.buttons}
            variant="outline"
            mt={10}
          >
            Mais Novidades
          </Button>
        </Center>

        <Flex
          justify="center"
          align="center"
          textAlign="center"
          mb={10}
          mt={10}
          direction={["column", "row", "row", "row", "row"]}
        >
          <Heading
            fontSize="3xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mr={2}
          >
            Nossas
          </Heading>
          <Heading fontSize="3xl">Ofertas</Heading>
        </Flex>

        <Cards />
        <Center>
          <Button
            rightIcon={<HiArrowRight />}
            colorScheme={configs.buttons}
            variant="outline"
            mt={10}
          >
            Mais Ofertas
          </Button>
        </Center>
      </Container>

      <Box
        bg={useColorModeValue(configs.jumbotron.light, configs.jumbotron.dark)}
        pt={10}
        pb={10}
        mt={10}
      >
        <Flex
          justify="center"
          align="center"
          direction={["column", "row", "row", "row", "row"]}
          textAlign="center"
          mb={10}
        >
          <Heading
            fontSize="3xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mr={2}
          >
            Nossas
          </Heading>
          <Heading fontSize="3xl">Avaliações</Heading>
        </Flex>
        <Container maxW="7xl">
          <Quotes />
        </Container>
      </Box>

      <Container mt={10} maxW="5xl">
        <Flex
          justify="center"
          align="center"
          direction={["column", "row", "row", "row", "row"]}
          textAlign="center"
          mb={10}
        >
          <Heading
            fontSize="3xl"
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            mr={2}
          >
            Entre em
          </Heading>
          <Heading fontSize="3xl">Contato Conosco</Heading>
        </Flex>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={5}
          justifyContent="center"
        >
          <Flex
            rounded="md"
            borderWidth="1px"
            shadow="md"
            direction="column"
            justify="center"
            align="center"
            p={3}
            textAlign="center"
          >
            <Icon
              as={HiOutlineMap}
              fontSize="5xl"
              color={useColorModeValue(
                configs.titles.light,
                configs.titles.dark
              )}
            />
            <Heading fontWeight="semibold" fontSize="2xl">
              Endereço
            </Heading>
            <Text fontSize="sm" mt={3}>
              Av. João Damasceno de Sá, 618 - Pedro Afonso, TO, 77710-000
            </Text>
          </Flex>
          <Flex
            rounded="md"
            borderWidth="1px"
            shadow="md"
            direction="column"
            justify="center"
            align="center"
            p={3}
            textAlign="center"
          >
            <Icon
              as={HiOutlineMail}
              fontSize="5xl"
              color={useColorModeValue(
                configs.titles.light,
                configs.titles.dark
              )}
            />
            <Heading fontWeight="semibold" fontSize="2xl">
              Email
            </Heading>
            <Text fontSize="sm" mt={3}>
              lojadolceencantopa@gmail.com
            </Text>
          </Flex>
          <Flex
            rounded="md"
            borderWidth="1px"
            shadow="md"
            direction="column"
            justify="center"
            align="center"
            p={3}
            textAlign="center"
          >
            <Icon
              as={HiOutlinePhone}
              fontSize="5xl"
              color={useColorModeValue(
                configs.titles.light,
                configs.titles.dark
              )}
            />
            <Heading fontWeight="semibold" fontSize="2xl">
              Telefone
            </Heading>
            <Text fontSize="sm" mt={3}>
              (63) 3466-2225
            </Text>
          </Flex>
        </Grid>

        <Grid
          mt={5}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={5}
        >
          <Box rounded="md" shadow="md" borderWidth="1px" p={4}>
            <Heading fontSize="2xl">Envie-nos uma Mensagem</Heading>

            <FormControl mt={3}>
              <FormLabel>Seu Nome</FormLabel>
              <Input
                focusBorderColor={useColorModeValue(
                  configs.inputs.light,
                  configs.inputs.dark
                )}
                placeholder="Seu Nome"
              />
            </FormControl>
            <Grid templateColumns="repeat(2, 1fr)" gap={2} mt={2}>
              <FormControl>
                <FormLabel>Telefone</FormLabel>
                <Input
                  focusBorderColor={useColorModeValue(
                    configs.inputs.light,
                    configs.inputs.dark
                  )}
                  placeholder="Telefone"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  focusBorderColor={useColorModeValue(
                    configs.inputs.light,
                    configs.inputs.dark
                  )}
                  placeholder="Email"
                />
              </FormControl>
            </Grid>
            <FormControl mt={2}>
              <FormLabel>Sua Mensagem</FormLabel>
              <Textarea
                focusBorderColor={useColorModeValue(
                  configs.inputs.light,
                  configs.inputs.dark
                )}
                rows={5}
              />
            </FormControl>
            <Button
              leftIcon={<RiMailSendLine />}
              mt={2}
              colorScheme={configs.buttons}
            >
              Enviar Mensagem
            </Button>
          </Box>
          <Box rounded="md" shadow="md" borderWidth="1px" p={4} minH="400px">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.473580048887!2d-48.1767920796962!3d-8.984255796829638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x932684078e4a6f25%3A0x58f34f412478b40b!2sDolce%20Encanto!5e0!3m2!1spt-BR!2sbr!4v1638036512397!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </Box>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
