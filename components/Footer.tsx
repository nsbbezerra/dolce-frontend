import { Button, IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Center,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { FC } from "react";
import { HiArrowRight } from "react-icons/hi";
import { configs } from "../configs";
import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoWhatsapp,
} from "react-icons/io";

const Footer: FC = () => {
  return (
    <Box
      bg={useColorModeValue(configs.jumbotron.light, configs.jumbotron.dark)}
      pt={10}
      pb={10}
      mt={10}
    >
      <Container maxW="6xl">
        <Grid
          templateColumns="repeat(auto-fit, minmax(220px, 220px))"
          gap={20}
          justifyContent="center"
        >
          <Box>
            <Heading fontWeight="semibold" fontSize="2xl">
              Sobre Nós
            </Heading>
            <Text mt={5} fontSize="sm" textAlign="justify">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </Text>

            <Button
              rightIcon={<HiArrowRight />}
              colorScheme={configs.buttons}
              size="sm"
              mt={3}
            >
              Leia Mais
            </Button>
          </Box>

          <Box>
            <Heading fontWeight="semibold" fontSize="2xl">
              Departamentos
            </Heading>

            <Stack mt={5} spacing={2}>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Masculino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Feminino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Masculino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Feminino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Masculino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Feminino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Masculino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Feminino
              </Button>

              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Feminino
              </Button>

              <Button
                rightIcon={<HiArrowRight />}
                colorScheme={configs.buttons}
                size="sm"
                mt={3}
                w="max-content"
              >
                Veja Mais
              </Button>
            </Stack>
          </Box>

          <Box>
            <Heading fontWeight="semibold" fontSize="2xl">
              Categorias
            </Heading>

            <Stack mt={5} spacing={2}>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Feminino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Masculino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Feminino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Masculino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Feminino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Masculino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Feminino
              </Button>
              <Button
                variant="link"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
                size="sm"
              >
                Masculino
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Feminino
              </Button>
              <Button
                rightIcon={<HiArrowRight />}
                colorScheme={configs.buttons}
                size="sm"
                mt={3}
                w="max-content"
              >
                Veja Mais
              </Button>
            </Stack>
          </Box>

          <Box>
            <Heading fontWeight="semibold" fontSize="2xl">
              Saiba Mais
            </Heading>

            <Stack mt={5} spacing={2}>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Produtos
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Sobre Nós
              </Button>
              <Button
                variant="link"
                size="sm"
                leftIcon={<HiArrowRight />}
                isFullWidth={false}
                w="max-content"
              >
                Contato
              </Button>
            </Stack>

            <HStack mt={10}>
              <Box
                w="40px"
                h="37px"
                rounded="full"
                overflow="hidden"
                bg="white"
              >
                <Image
                  src="/img/visa.svg"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  alt="Visa Card"
                />
              </Box>
              <Box
                w="40px"
                h="37px"
                rounded="full"
                overflow="hidden"
                bg="white"
              >
                <Image
                  src="/img/mastercard.svg"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  alt="Visa Card"
                />
              </Box>
              <Box
                w="40px"
                h="37px"
                rounded="full"
                overflow="hidden"
                bg="white"
              >
                <Image
                  src="/img/diners.svg"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  alt="Visa Card"
                />
              </Box>
              <Box
                w="40px"
                h="37px"
                rounded="full"
                overflow="hidden"
                bg="white"
                p={1}
              >
                <Image
                  src="/img/pix.svg"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="contain"
                  alt="Visa Card"
                />
              </Box>
              <Box
                w="40px"
                h="37px"
                rounded="full"
                overflow="hidden"
                bg="white"
                p={2}
              >
                <Image
                  src="/img/barcode.svg"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="contain"
                  alt="Visa Card"
                />
              </Box>
            </HStack>
          </Box>
        </Grid>

        <Center mt={10}>
          <HStack>
            <IconButton
              aria-label="icons"
              icon={<IoLogoWhatsapp />}
              rounded="full"
              colorScheme={configs.buttons}
              size="lg"
              variant="outline"
            />
            <IconButton
              aria-label="icons"
              icon={<IoLogoInstagram />}
              rounded="full"
              colorScheme={configs.buttons}
              size="lg"
              variant="outline"
            />
            <IconButton
              aria-label="icons"
              icon={<IoLogoFacebook />}
              rounded="full"
              colorScheme={configs.buttons}
              size="lg"
              variant="outline"
            />
            <IconButton
              aria-label="icons"
              icon={<IoLogoPinterest />}
              rounded="full"
              colorScheme={configs.buttons}
              size="lg"
              variant="outline"
            />
          </HStack>
        </Center>
        <Divider mt={10} mb={10} />
        <Text textAlign="center" fontSize="sm">
          © Copyright @ 2021 por:{" "}
          <Link
            color={useColorModeValue(configs.titles.light, configs.titles.dark)}
            href="/"
            target="_blank"
          >
            NK Informática, Responsável Técnico: Natanael Bezerra
          </Link>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
