import { Box } from "@chakra-ui/layout";
import { FC } from "react";
import Image from "next/image";

const Banner: FC = () => {
  return (
    <>
      <Box w="100%" mt="65px">
        <Image
          src="/img/banner.png"
          width={1920}
          height={711}
          layout="responsive"
          objectFit="cover"
          alt="Dolce Encanto | Vestindo você em grande estilo"
        />
      </Box>
    </>
  );
};

export default Banner;
