import theme from "@/config/theme";
import { AppNavigatorParamList } from "@/navigators/AppNavigator/app-navigator-param-list";
import { Fighter } from "@/types/Fighter";
import { Universe } from "@/types/Universe";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { FlatList, RefreshControl } from "react-native";
import { FighterItem } from "../FighterItem";
import { Slider } from "../Slider";
import { Text } from "../Text";

import { Container, EmptyContainer, SliderContainer } from "./styles";

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
    return <FighterItem fighter={item} onPress={() => handlePress(item)} />;
  };

  const renderHeader = () => (
    <SliderContainer>
      <Slider data={universe} />
    </SliderContainer>
  );

  const renderEmpty = () => {
    return (
      <EmptyContainer>
        <Text weight="regular" color={theme.colors.grey["600"]} size={16}>
          No fighters were found :(
        </Text>
      </EmptyContainer>
    );
  };

  const flatListOptimizationProps = {
    initialNumToRender: 6,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    keyExtractor: useCallback((item: Universe) => item.name, []),
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={renderHeader()}
        ListEmptyComponent={renderEmpty()}
        contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            colors={[theme.colors.grey["400"]]}
            tintColor={theme.colors.grey["400"]}
            refreshing={loading}
            onRefresh={onRefresh}
          />
        }
        data={fighters}
        renderItem={({ item }) => renderItem(item)}
        {...flatListOptimizationProps}
      />
    </Container>
  );
};
