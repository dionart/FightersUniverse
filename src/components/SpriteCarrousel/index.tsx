import theme from "@/config/theme";
import React, { useCallback, useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import ChevronSVG from "@/assets/images/chevron.svg";
import {
  Container,
  PaginationContainer,
  PaginationItem,
  RoundedButton,
  SpriteImageContainer,
  SpriteItem,
  TextContainer,
} from "./styles";
import { DetectPlatform } from "@/utils/detect-platform";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";
import { Sprite } from "@/types";
import { initializeOnboarding } from "@/store/app";
import { useDispatch } from "react-redux";

interface SpriteCarrouselProps {
  data: Sprite[];
}

export const SpriteCarrousel: React.FC<SpriteCarrouselProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const indexRef = useRef(activeIndex);
  const dispatch = useDispatch();
  indexRef.current = activeIndex;

  const handlePress = async () => {
    dispatch(initializeOnboarding());
  };

  const renderItem = (item: Sprite) => (
    <SpriteItem>
      <SpriteImageContainer>{item.image}</SpriteImageContainer>
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
        keyExtractor={(item) => item.title}
      />
      <PaginationContainer>
        {data.map((_, index: number) => (
          <PaginationItem key={index} active={activeIndex === index} />
        ))}
      </PaginationContainer>

      {activeIndex === data.length - 1 &&
        DetectPlatform(
          <Box marginTop={60} paddingLeft={38} paddingRight={38}>
            <Button
              textProps={{
                color: theme.colors.blue["100"],
                weight: "medium",
                lineHeight: 20,
              }}
              onPress={handlePress}
            >
              Let's go
            </Button>
          </Box>,
          <RoundedButton onPress={handlePress}>
            <ChevronSVG />
          </RoundedButton>
        )}
    </Container>
  );
};
