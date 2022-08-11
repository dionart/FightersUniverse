import theme from "@/config/theme";
import { Fighter } from "@/types";
import React from "react";
import FastImage from "react-native-fast-image";
import { Box } from "../Box";
import { Row } from "../Row";
import { Text } from "../Text";

import { Container, FighterImage } from "./styles";

interface FighterItemProps {
  fighter: Fighter;
  onPress: () => void;
}

export const FighterItem: React.FC<FighterItemProps> = ({
  fighter,
  onPress,
}) => (
  <Container onPress={onPress}>
    <Row center>
      <FighterImage
        source={{
          uri: fighter.imageURL,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Box marginLeft={13}>
        <Text weight="bold" size={16} color={theme.colors.grey["900"]}>
          {fighter.name}
        </Text>
        <Text weight="regular" color={theme.colors.grey["700"]} size={14}>
          {fighter.universe}
        </Text>
      </Box>
    </Row>
    <Box>
      <Text
        weight="regular"
        align="right"
        color={theme.colors.grey["700"]}
        size={14}
      >
        Price: {fighter.price}
      </Text>
      <Text align="right" color={theme.colors.grey["700"]} size={14}>
        Rate: {fighter.rate}
      </Text>
      <Text align="right" color={theme.colors.grey["700"]} size={14}>
        Downloads: {fighter.downloads}
      </Text>
    </Box>
  </Container>
);
