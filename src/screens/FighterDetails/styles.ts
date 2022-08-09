import theme from "@/config";
import { Platform } from "react-native";
import FastImage from "react-native-fast-image";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Platform.OS === "android"
    ? theme.colors.white
    : theme.colors.grey["500"]};
`;

export const FighterImage = styled(FastImage)`
  width: 182px;
  height: 182px;
`;

export const PriceTag = styled.View`
  width: 84px;
  padding: 6px 14px;
  background-color: ${theme.colors.blue["200"]};
  border-radius: 7px;
  align-items: center;
  margin-top: 5px;
`;
