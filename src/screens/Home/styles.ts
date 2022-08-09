import theme from "@/config";
import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Platform.OS === "ios"
    ? theme.colors.grey["200"]
    : theme.colors.white};
`;
