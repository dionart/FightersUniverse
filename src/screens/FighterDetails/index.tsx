import { AppNavigatorParamList } from "@/navigators/AppNavigator/app-navigator-param-list";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import FastImage from "react-native-fast-image";

import { Container, FighterImage, PriceTag } from "./styles";
import { Platform } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import theme from "@/config/theme";
import { Box, Header, Rating, Row, Text } from "@/components";

type ScreenRouteProp = RouteProp<AppNavigatorParamList, "FighterDetails">;
export const FighterDetails: React.FC = () => {
  const route = useRoute<ScreenRouteProp>();
  const navigation = useNavigation();
  const { fighter } = route.params;

  useEffect(() => {
    Platform.OS === "ios" &&
      navigation.setOptions({
        header: ({
          navigation,
        }: NativeStackScreenProps<AppNavigatorParamList>) => (
          <Header navigation={navigation} title={route.params.fighter.name} />
        ),
      });
  }, []);

  return (
    <Container>
      <Row marginTop={40} marginLeft={19}>
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
          <Rating disabled marginTop={24} rate={fighter.rate} />
          <Text
            marginTop={5}
            weight="regular"
            size={14}
            color={theme.colors.grey["700"]}
          >
            Downloads: {fighter.downloads}
          </Text>
          <PriceTag>
            <Text
              lineHeight={28}
              color={theme.colors.white}
              weight="bold"
              size={24}
            >
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
      <Box marginTop={24} paddingLeft={16} paddingRight={16} paddingBottom={24}>
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
