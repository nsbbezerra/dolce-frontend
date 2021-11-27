import { Box } from "@chakra-ui/layout";
import { FC } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { configs } from "../configs";

const Banner: FC = () => {
  return (
    <Box w="100%" mt="65px">
      <Carousel
        showStatus={false}
        infiniteLoop
        interval={8000}
        showThumbs={false}
      >
        <Box>
          <Image
            src="/img/banner.png"
            width={1920}
            height={711}
            layout="responsive"
            objectFit="cover"
            alt={configs.imageAlt}
          />
        </Box>
        <Box>
          <Image
            src="/img/banner2.png"
            width={1920}
            height={711}
            layout="responsive"
            objectFit="cover"
            alt={configs.imageAlt}
          />
        </Box>
        <Box>
          <Image
            src="/img/banner3.png"
            width={1920}
            height={711}
            layout="responsive"
            objectFit="cover"
            alt={configs.imageAlt}
          />
        </Box>
      </Carousel>
    </Box>
  );
};

export default Banner;
