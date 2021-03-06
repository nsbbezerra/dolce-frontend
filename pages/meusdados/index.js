import { useState, useRef } from "react";
import { ContainerApp, Fixed, ContainerNonFixed } from "../../styles/styles";
import HeaderApp from "../../components/headerApp";
import FooterApp from "../../components/footer";
import {
  Container,
  Flex,
  Icon,
  Heading,
  Box,
  Input,
  Text,
  Grid,
  Button,
  Divider,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  AiOutlineIdcard,
  AiOutlinePlus,
  AiOutlineKey,
  AiOutlineSave,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import configs from "../../configs/configs";

export default function MeusDados() {
  const [modalAddress, setModalAddress] = useState(false);
  const [alert, setAlert] = useState(false);
  const cancelRef = useRef();
  return (
    <ContainerApp>
      <ContainerNonFixed>
        <HeaderApp />
      </ContainerNonFixed>
      <Fixed>
        <Container maxW="6xl" mt={10} mb={10}>
          <Grid
            templateColumns={["1fr", "1fr", "1fr", "1fr", "200px 1fr"]}
            gap={10}
          >
            <Box
              borderRadius="md"
              borderWidth="1px"
              p={3}
              h="min-content"
              display={["none", "none", "none", "none", "block"]}
            >
              <Flex fontWeight="700" align="center">
                <Icon as={AiOutlineMenu} mr={5} />
                Menu
              </Flex>

              <Link href="/meusdados" passHref>
                <a>
                  <Button
                    leftIcon={<AiOutlineIdcard />}
                    variant="solid"
                    isFullWidth
                    mt={5}
                  >
                    Meus Dados
                  </Button>
                </a>
              </Link>

              <Link href="/minhascompras" passHref>
                <a>
                  <Button
                    leftIcon={<BsBag />}
                    variant="solid"
                    mt={5}
                    isFullWidth
                  >
                    Minhas Compras
                  </Button>
                </a>
              </Link>
            </Box>

            <Box>
              <Flex
                bg={configs.template.chart.bgBanner}
                p={3}
                shadow="md"
                borderRadius="md"
                mb={5}
                align="center"
              >
                <Icon as={AiOutlineIdcard} fontSize="2xl" mr={10} />
                <Heading size="md" color={configs.template.chart.colorBanner}>
                  Meus Dados
                </Heading>
              </Flex>

              <Box borderWidth="1px" p={5} borderRadius="md" mt={5} shadow="md">
                <Flex align="center">
                  <Icon as={AiOutlineIdcard} mr={5} />
                  <Text fontSize="md" fontWeight="700">
                    Dados
                  </Text>
                </Flex>
                <Divider mt={3} mb={3} />

                <Grid templateColumns="1fr" gap="20px">
                  <Box>
                    <Text fontSize="sm">Nome</Text>
                    <Input
                      type="number"
                      value={""}
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                  </Box>
                </Grid>

                <Grid
                  templateColumns={[
                    "100%",
                    "100%",
                    "1fr 1fr",
                    "1fr 1fr",
                    "1fr 1fr",
                  ]}
                  gap="20px"
                  mt={3}
                >
                  <Box>
                    <Text fontSize="sm">Email</Text>
                    <Input
                      type="number"
                      value={""}
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                  </Box>
                  <Box>
                    <Text fontSize="sm">Telefone</Text>
                    <Input
                      type="number"
                      value={""}
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                  </Box>
                </Grid>

                <Grid
                  templateColumns={[
                    "100%",
                    "100%",
                    "1fr 1fr",
                    "1fr 1fr",
                    "1fr 1fr",
                  ]}
                  gap="20px"
                  mt={3}
                >
                  <Box>
                    <Text fontSize="sm">CPF</Text>
                    <Input
                      type="number"
                      value={""}
                      _focus={{ borderColor: "yellow.400" }}
                      isReadOnly
                    />
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="white" userSelect="none">
                      CPF
                    </Text>
                    <Button
                      leftIcon={<AiOutlineKey />}
                      onClick={() => setAlert(true)}
                    >
                      Alterar Senha de Acesso
                    </Button>
                  </Box>
                </Grid>
              </Box>

              {/** DADOS DO ENDERE??O */}

              <Box borderWidth="1px" p={5} borderRadius="md" mt={5} shadow="md">
                <Flex align="center">
                  <Icon as={FiMapPin} mr={5} />
                  <Text fontSize="md" fontWeight="700">
                    Endere??o
                  </Text>
                </Flex>
                <Divider mt={3} mb={3} />

                <Box borderWidth="1px" p={3} borderRadius="md">
                  <Grid
                    templateColumns={[
                      "100%",
                      "100%",
                      "1fr 100px",
                      "1fr 100px",
                      "1fr 100px",
                    ]}
                    gap="20px"
                  >
                    <Box>
                      <Text fontSize="sm">Logradouro</Text>
                      <Input
                        type="number"
                        value={""}
                        _focus={{ borderColor: "yellow.400" }}
                        isReadOnly
                      />
                    </Box>
                    <Box>
                      <Text fontSize="sm">N??mero</Text>
                      <Input
                        type="number"
                        value={""}
                        _focus={{ borderColor: "yellow.400" }}
                        isReadOnly
                      />
                    </Box>
                  </Grid>
                  <Text fontSize="sm" mt={3}>
                    Complemento
                  </Text>
                  <Input
                    type="number"
                    value={""}
                    _focus={{ borderColor: "yellow.400" }}
                    isReadOnly
                  />

                  <Grid
                    templateColumns={[
                      "100%",
                      "100%",
                      "1fr 1fr 100px",
                      "1fr 1fr 100px",
                      "1fr 1fr 100px",
                    ]}
                    gap="20px"
                    mt={3}
                  >
                    <Box>
                      <Text fontSize="sm">CEP</Text>
                      <Input
                        type="number"
                        value={""}
                        _focus={{ borderColor: "yellow.400" }}
                        isReadOnly
                      />
                    </Box>
                    <Box>
                      <Text fontSize="sm">Cidade</Text>
                      <Input
                        type="number"
                        value={""}
                        _focus={{ borderColor: "yellow.400" }}
                        isReadOnly
                      />
                    </Box>
                    <Box>
                      <Text fontSize="sm">Estado</Text>
                      <Select placeholder="UF" focusBorderColor="yellow.400">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </Box>
                  </Grid>
                </Box>

                <Divider mt={5} mb={5} />

                <Button
                  leftIcon={<AiOutlinePlus />}
                  onClick={() => setModalAddress(true)}
                >
                  Adicionar Endere??o
                </Button>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>

      <Modal
        isOpen={modalAddress}
        size="xl"
        onClose={() => setModalAddress(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Novo Endere??o</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns={[
                "100%",
                "100%",
                "1fr 100px",
                "1fr 100px",
                "1fr 100px",
              ]}
              gap="20px"
            >
              <Box>
                <Text fontSize="sm">Logradouro</Text>
                <Input
                  type="number"
                  value={""}
                  _focus={{ borderColor: "yellow.400" }}
                  isReadOnly
                />
              </Box>
              <Box>
                <Text fontSize="sm">N??mero</Text>
                <Input
                  type="number"
                  value={""}
                  _focus={{ borderColor: "yellow.400" }}
                  isReadOnly
                />
              </Box>
            </Grid>
            <Text fontSize="sm" mt={3}>
              Complemento
            </Text>
            <Input
              type="number"
              value={""}
              _focus={{ borderColor: "yellow.400" }}
              isReadOnly
            />

            <Grid
              templateColumns={[
                "100%",
                "100%",
                "1fr 1fr 100px",
                "1fr 1fr 100px",
                "1fr 1fr 100px",
              ]}
              gap="20px"
              mt={3}
            >
              <Box>
                <Text fontSize="sm">CEP</Text>
                <Input
                  type="number"
                  value={""}
                  _focus={{ borderColor: "yellow.400" }}
                  isReadOnly
                />
              </Box>
              <Box>
                <Text fontSize="sm">Cidade</Text>
                <Input
                  type="number"
                  value={""}
                  _focus={{ borderColor: "yellow.400" }}
                  isReadOnly
                />
              </Box>
              <Box>
                <Text fontSize="sm">Estado</Text>
                <Select placeholder="UF" focusBorderColor="yellow.400">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="solid"
              leftIcon={<AiOutlineSave />}
              colorScheme="yellow"
            >
              Cadastrar Endere??o
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AlertDialog
        isOpen={alert}
        leastDestructiveRef={cancelRef}
        onClose={() => setAlert(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Alterar Senha de Acesso
            </AlertDialogHeader>

            <AlertDialogBody>
              Um email foi enviado para seu email de cadastro com as informa????es
              de altera????o de senha.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => setAlert(false)}
                colorScheme="yellow"
                leftIcon={<FaTimes />}
              >
                Fechar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </ContainerApp>
  );
}
