import theme from "@/config";
import { AppNavigatorParamList } from "@/navigators/AppNavigator/app-navigator-param-list";
import { SpriteType } from "@/screens/Onboarding";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { Box } from "../Box";
import Button from "../Button";
import { Text } from "../Text";
import {
  Container,
  PaginationContainer,
  PaginationItem,
  SpriteItem,
  TextContainer,
} from "./styles";

interface SpriteCarrouselProps {
  data: SpriteType[];
}

export const SpriteCarrousel: React.FC<SpriteCarrouselProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<AppNavigatorParamList>>();
  const indexRef = useRef(activeIndex);
  indexRef.current = activeIndex;

  const handlePress = () => {
    navigation.navigate("Fighters");
  };

  const renderItem = (item: SpriteType) => (
    <SpriteItem>
      {item.image}
      <TextContainer>
        <Text
          marginTop={54}
          marginBottom={60}
          align="center"
          color={theme.colors.white}
          size={25}
          lineHeight={30}
          weight="regular"
        >
          {item.title}
        </Text>
      </TextContainer>
    </SpriteItem>
  );

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const scrollIndex = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(scrollIndex);

      const distance = Math.abs(roundIndex - scrollIndex);

      const isNoMansLand = distance > 0.4;

      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setActiveIndex(roundIndex);
      }
    },
    []
  );

  return (
    <Container>
      <FlatList
        horizontal
        onScroll={onScroll}
        data={data}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderItem(item)}
      />
      <PaginationContainer>
        {data.map((_, index: number) => (
          <PaginationItem active={activeIndex === index} />
        ))}
      </PaginationContainer>
      {activeIndex === data.length - 1 && (
        <Box marginTop={60} paddingLeft={38} paddingRight={38}>
          <Button onPress={handlePress}>
            <Text
              color={theme.colors.blue["200"]}
              weight="medium"
              lineHeight={20}
            >
              Let's go
            </Text>
          </Button>
        </Box>
      )}
    </Container>
  );
};
