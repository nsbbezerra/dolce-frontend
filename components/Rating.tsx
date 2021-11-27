import { FC } from "react";
import { HiStar } from "react-icons/hi";
import Icon from "@chakra-ui/icon";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { configs } from "../configs";
import { Flex } from "@chakra-ui/layout";

type Props = {
  isCentered?: boolean;
};

const Rating: FC<Props> = ({ isCentered }) => {
  return (
    <Flex justify={isCentered ? "center" : "flex-start"} align="center" mt={2}>
      <Icon
        as={HiStar}
        color={useColorModeValue(
          configs.stars.active.light,
          configs.stars.active.dark
        )}
      />
      <Icon
        as={HiStar}
        color={useColorModeValue(
          configs.stars.active.light,
          configs.stars.active.dark
        )}
      />
      <Icon
        as={HiStar}
        color={useColorModeValue(
          configs.stars.active.light,
          configs.stars.active.dark
        )}
      />
      <Icon
        as={HiStar}
        color={useColorModeValue(
          configs.stars.active.light,
          configs.stars.active.dark
        )}
      />
      <Icon
        as={HiStar}
        color={useColorModeValue(
          configs.stars.inactive.light,
          configs.stars.inactive.dark
        )}
      />
    </Flex>
  );
};

export default Rating;
