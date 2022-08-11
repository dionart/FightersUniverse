import theme from "@/config/theme";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { DetectPlatform } from "@/utils/detect-platform";
import { scale } from "react-native-size-matters";

const { width } = Dimensions.get("window");

interface PaginationItemProps {
  active?: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const PaginationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: center;
  padding-bottom: ${DetectPlatform(0, 56)}px;
`;

export const PaginationItem = styled.View<PaginationItemProps>`
  width: ${scale(8)}px;
  height: ${scale(8)}px;
  border-radius: ${scale(4)}px;
  background-color: ${({ active }) =>
    active ? theme.colors.blue["500"] : theme.colors.white};
  margin-left: ${scale(8)}px;
`;

export const SpriteItem = styled.View`
  width: ${width}px;
  align-items: center;
  height: ${DetectPlatform("auto", "100%")};
  justify-content: center;
`;

export const SpriteImageContainer = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  width: 60%;
`;

export const RoundedButton = styled.TouchableOpacity`
  position: absolute;
  bottom: ${scale(30)}px;
  right: ${scale(16)}px;
  padding: ${scale(19)}px;
  background-color: ${theme.colors.white};
  border-radius: ${scale(28)}px;
  elevation: 12;
`;
