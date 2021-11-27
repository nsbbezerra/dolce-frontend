import { FC } from "react";
import { Grid, Container, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import Image from "next/image";
import { configs } from "../configs";
import Link from "next/link";

const Promo: FC = () => {
  return (
    <Container maxW="6xl">
      <Grid
        mt={10}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={10}
        justifyContent="center"
      >
        <LinkBox w="100%" rounded="md" shadow="md" overflow="hidden">
          <Link href="/" passHref>
            <LinkOverlay>
              <Image
                alt={configs.imageAlt}
                width={626}
                height={350}
                src="https://img.freepik.com/vetores-gratis/fundo-de-venda-realista-com-papel-rasgado_52683-55790.jpg?size=626&ext=jpg"
                layout="responsive"
                objectFit="cover"
              />
            </LinkOverlay>
          </Link>
        </LinkBox>
        <LinkBox w="100%" rounded="md" shadow="md" overflow="hidden">
          <Link href="/" passHref>
            <LinkOverlay>
              <Image
                alt={configs.imageAlt}
                width={626}
                height={350}
                src="https://img.freepik.com/vetores-gratis/banner-de-grande-venda-com-formas-abstratas_1017-31302.jpg?size=626&ext=jpg"
                layout="responsive"
                objectFit="cover"
              />
            </LinkOverlay>
          </Link>
        </LinkBox>
      </Grid>
    </Container>
  );
};

export default Promo;
