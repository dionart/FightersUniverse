import { Platform } from "react-native";
import styled from "styled-components/native";
import FastImage from "react-native-fast-image";
import theme from "@/config";

export const Container = styled.View`
  width: 100%;
  background-color: ${Platform.OS === "android"
    ? theme.colors.white
    : theme.colors.grey["200"]};
`;

export const FighterItem = styled.TouchableOpacity`
  padding: 24px 24px 13px 13px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: #e6e6e6;
  border-bottom-width: 1px;
`;

export const FighterImage = styled(FastImage)`
  width: 73px;
  height: 73px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
