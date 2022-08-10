import { RootState } from "@/store";
import { selectUniverse } from "@/store/app";
import { Universe } from "@/types/Universe";
import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../Text";

import { Container, SliderItem } from "./styles";

interface SliderProps {
  data: Universe[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  const dispatch = useDispatch();
  const universeFilter = useSelector(
    (state: RootState) => state.app.selectedUniverse
  );

  const handlePress = (universeName: string) => {
    universeFilter === universeName
      ? dispatch(selectUniverse(""))
      : dispatch(selectUniverse(universeName));
  };

  const renderItem = (item: Universe) => {
    return (
      <SliderItem
        isSelected={universeFilter === item.name}
        onPress={() => handlePress(item.name)}
      >
        <Text size={14} color="#fff">
          {item.name}
        </Text>
      </SliderItem>
    );
  };

  const renderHeader = () => {
    return (
      <SliderItem isSelected={!universeFilter} onPress={() => handlePress("")}>
        <Text size={14} color="#fff">
          All
        </Text>
      </SliderItem>
    );
  };

  const flatListOptimizationProps = {
    initialNumToRender: 5,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    keyExtractor: useCallback((item: Universe) => item.objectID, []),
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={data && renderHeader()}
        data={data}
        renderItem={({ item }) => renderItem(item)}
        {...flatListOptimizationProps}
      />
    </Container>
  );
};

export default Slider;
