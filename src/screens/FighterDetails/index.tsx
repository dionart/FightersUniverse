import { Box } from "@/components/Box";
import { Row } from "@/components/Row";
import { Text } from "@/components/Text";
import theme from "@/config";
import { AppNavigatorParamList } from "@/navigators/AppNavigator/app-navigator-param-list";
import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import FastImage from "react-native-fast-image";
import StarSVG from "@/assets/images/star.svg";

import { Container, FighterImage, PriceTag } from "./styles";

type ScreenRouteProp = RouteProp<AppNavigatorParamList, "FighterDetails">;
export const FighterDetails: React.FC = () => {
  const route = useRoute<ScreenRouteProp>();
  const { fighter } = route.params;
  return (
    <Container>
      <Row marginLeft={19} marginTop={40} spaceBetween>
        <Box>
          <Text
            lineHeight={24}
            weight="bold"
            size={24}
            color={theme.colors.grey["900"]}
          >
            {fighter.name}
          </Text>
          <Text
            lineHeight={20}
            weight="regular"
            size={14}
            color={theme.colors.grey["900"]}
          >
            {fighter.universe}
          </Text>
          <Text
            marginTop={24}
            weight="regular"
            size={14}
            color={theme.colors.grey["700"]}
          >
            Downloads: {fighter.downloads}
          </Text>
          <PriceTag>
            <Text color={theme.colors.white} weight="bold" size={24}>
              ${fighter.price}
            </Text>
          </PriceTag>
        </Box>
        <FighterImage
          source={{
            uri: fighter.imageURL,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Row>
      <Box marginTop={24} paddingLeft={16} paddingRight={16}>
        <Text
          color={theme.colors.grey["900"]}
          lineHeight={27}
          weight="regular"
          size={14}
        >
          {fighter.description}
        </Text>
      </Box>
    </Container>
  );
};
