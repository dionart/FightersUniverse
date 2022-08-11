import styled from "styled-components/native";
import FastImage from "react-native-fast-image";
import theme from "@/config/theme";
import { DetectPlatform } from "@/utils/detect-platform";
import { s } from "react-native-size-matters";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${DetectPlatform(
    theme.colors.grey["200"],
    theme.colors.white
  )};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SliderContainer = styled.View`
  padding: 17px 0 12px 12px;
  background-color: ${theme.colors.white};
`;

export const EmptyContainer = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
