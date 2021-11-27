import { FC } from "react";
import Image from "next/image";
import { Box, Container, Flex, HStack, Stack } from "@chakra-ui/layout";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import Head from "next/head";
import { Button, IconButton } from "@chakra-ui/button";
import {
  HiOutlineHome,
  HiOutlineTag,
  HiInformationCircle,
  HiOutlinePhone,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineMenu,
  HiX,
} from "react-icons/hi";
import { configs } from "../configs";
import { Tooltip } from "@chakra-ui/tooltip";
import { Collapse } from "@chakra-ui/transition";
import { useDisclosure } from "@chakra-ui/hooks";

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  const MenuItens = () => (
    <>
      <Button
        leftIcon={<HiOutlineHome />}
        colorScheme={useColorModeValue(
          configs.buttonsAlter.light,
          configs.buttonsAlter.dark
        )}
        variant={isOpen === true ? "solid" : "ghost"}
        size={isOpen === true ? "md" : "sm"}
      >
        Início
      </Button>
      <Button
        leftIcon={<HiOutlineTag />}
        colorScheme={useColorModeValue(
          configs.buttonsAlter.light,
          configs.buttonsAlter.dark
        )}
        variant={isOpen === true ? "solid" : "ghost"}
        size={isOpen === true ? "md" : "sm"}
      >
        Produtos
      </Button>
      <Button
        leftIcon={<HiInformationCircle />}
        colorScheme={useColorModeValue(
          configs.buttonsAlter.light,
          configs.buttonsAlter.dark
        )}
        variant={isOpen === true ? "solid" : "ghost"}
        size={isOpen === true ? "md" : "sm"}
      >
        Sobre Nós
      </Button>
      <Button
        leftIcon={<HiOutlinePhone />}
        colorScheme={useColorModeValue(
          configs.buttonsAlter.light,
          configs.buttonsAlter.dark
        )}
        variant={isOpen === true ? "solid" : "ghost"}
        size={isOpen === true ? "md" : "sm"}
      >
        Contato
      </Button>
      <Button
        leftIcon={colorMode === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
        colorScheme={useColorModeValue(
          configs.buttonsAlter.light,
          configs.buttonsAlter.dark
        )}
        variant="outline"
        onClick={toggleColorMode}
        size={isOpen === true ? "md" : "sm"}
        d={["flex", "none", "none", "none", "none"]}
      >
        {colorMode === "light" ? "Tema Escuro" : "Tema Claro"}
      </Button>
    </>
  );
  return (
    <>
      <Head>
        <title>Dolce Encanto | Vestindo você em grande estilo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Comprar Roupas Masculinas e Femininas | Masculino e Feminino online ✓ Encontre sandálias, sapatos, tamancos, tênis, rasteirinhas, roupas, acessórios, perfumes, bolsas, camisetas, vestidos, blusas e mais ✓ Pague em até 10x sem juros ✓ Entre e confira | Dolce Encanto | Pedro Afonso Tocantins"
        />
        <meta
          name="keywords"
          content="roupas, masculino, feminino, bolsas, acessórios, sapatos, sandálias, tênis, shorts, vestidos, calças, perfumes, camisetas, blusas, dolce encanto, pedro afonso"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dolce Encanto | Vestindo você em grande estilo"
        />
        <meta property="og:url" content="https://dolceencanto.com.br/" />
        <meta
          property="og:site_name"
          content="Dolce Encanto | Vestindo você em grande estilo"
        />
        <meta
          name="og:description"
          content="Comprar Roupas Masculinas e Femininas | Masculino e Feminino online ✓ Encontre sandálias, sapatos, tamancos, tênis, rasteirinhas, roupas, acessórios, perfumes, bolsas, camisetas, vestidos, blusas e mais ✓ Pague em até 10x sem juros ✓ Entre e confira | Dolce Encanto | Pedro Afonso Tocantins"
        />
        <meta name="robots" content="index,nofollow" />
        <meta
          property="og:author"
          content="NK Informática de Pedro Afonso - TO, Desenvolvedor Responsável: Natanael Bezerra"
        />
        <meta name="googletboot" content="index,nofollow" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta content="Global" name="distribution" />
      </Head>
      <Box
        shadow="lg"
        bg={useColorModeValue("white", "gray.900")}
        pos="fixed"
        top={0}
        right={0}
        left={0}
        zIndex={1000}
      >
        <Container maxW="6xl">
          <Flex h="65px" align="center" justify="space-between">
            <Box w={["160px", "220px", "220px", "220px", "220px"]}>
              <Image
                src={
                  colorMode === "light"
                    ? "/img/logo-black.svg"
                    : "/img/logo-gold.svg"
                }
                width={200}
                height={80}
                layout="responsive"
                objectFit="contain"
                alt={configs.imageAlt}
              />
            </Box>
            <HStack d={["none", "none", "flex", "flex", "flex"]}>
              <MenuItens />
            </HStack>
            <HStack>
              <IconButton
                colorScheme={useColorModeValue(
                  configs.buttonsAlter.light,
                  configs.buttonsAlter.dark
                )}
                aria-label="usuário"
                icon={isOpen ? <HiX /> : <HiOutlineMenu />}
                rounded="full"
                d={["flex", "flex", "none", "none", "none"]}
                onClick={onToggle}
              />
              <IconButton
                colorScheme={useColorModeValue(
                  configs.buttonsAlter.light,
                  configs.buttonsAlter.dark
                )}
                aria-label="usuário"
                icon={<HiOutlineUser />}
                rounded="full"
              />
              <IconButton
                colorScheme={useColorModeValue(
                  configs.buttonsAlter.light,
                  configs.buttonsAlter.dark
                )}
                aria-label="carrinho"
                icon={<HiOutlineShoppingCart />}
                rounded="full"
              />
              <Tooltip
                label={colorMode === "light" ? "Modo Escuro" : "Modo Claro"}
                hasArrow
              >
                <IconButton
                  colorScheme={useColorModeValue(
                    configs.buttonsAlter.light,
                    configs.buttonsAlter.dark
                  )}
                  aria-label="tema"
                  icon={
                    colorMode === "light" ? <HiOutlineMoon /> : <HiOutlineSun />
                  }
                  rounded="full"
                  onClick={toggleColorMode}
                  d={["none", "flex", "flex", "flex", "flex"]}
                  variant="outline"
                />
              </Tooltip>
            </HStack>
          </Flex>
        </Container>

        <Collapse in={isOpen} animateOpacity>
          <Box p={10}>
            <Stack spacing={3}>
              <MenuItens />
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default Header;
