import theme from "@/config";
import { AppNavigatorParamList } from "@/navigators/AppNavigator/app-navigator-param-list";
import { Fighter } from "@/types/Fighter";
import { Universe } from "@/types/Universe";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, RefreshControl } from "react-native";
import FastImage from "react-native-fast-image";
import { Box } from "../Box";
import Slider from "../Slider";
import { Text } from "../Text";

import { Container, FighterImage, FighterItem, Row } from "./styles";

interface FightersListProps {
  universe: Universe[];
  fighters: Fighter[];
  onRefresh: () => void;
  loading: boolean;
}

export const FightersList: React.FC<FightersListProps> = ({
  fighters,
  onRefresh,
  loading,
  universe,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppNavigatorParamList>>();

  const handlePress = (fighter: Fighter) => {
    navigation.navigate("FighterDetails", { fighter });
  };

  const renderItem = (item: Fighter) => {
    return (
      <FighterItem onPress={() => handlePress(item)}>
        <Row>
          <FighterImage
            source={{
              uri: item.imageURL,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Box marginLeft={13}>
            <Text weight="bold" size={16} color={theme.colors.grey["900"]}>
              {item.name}
            </Text>
            <Text color={theme.colors.grey["700"]} size={14}>
              {item.universe}
            </Text>
          </Box>
        </Row>
        <Box>
          <Text align="right" color={theme.colors.grey["700"]} size={14}>
            Price: {item.price}
          </Text>
          <Text align="right" color={theme.colors.grey["700"]} size={14}>
            Rate: {item.rate}
          </Text>
          <Text align="right" color={theme.colors.grey["700"]} size={14}>
            Downloads: {item.downloads}
          </Text>
        </Box>
      </FighterItem>
    );
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={<Slider data={universe} />}
        refreshControl={
          <RefreshControl
            colors={[theme.colors.blue["200"]]}
            tintColor={theme.colors.blue["200"]}
            refreshing={loading}
            onRefresh={onRefresh}
          />
        }
        data={fighters}
        renderItem={({ item }) => renderItem(item)}
      />
    </Container>
  );
};
