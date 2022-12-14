import theme from "@/config/theme";
import styled from "styled-components/native";
import { s } from "react-native-size-matters";

interface IconsContainer {
  hasGoBack: boolean;
}

export const Container = styled.View`
  width: 100%;
  background-color: ${theme.colors.white};
  border-bottom-color: ${theme.colors.grey["450"]};
  border-bottom-width: ${s(0.5)}px;
  padding: 12px 20px 8px 12px;
`;

export const IconsContainer = styled.View<IconsContainer>`
  flex-direction: row;
  justify-content: ${({ hasGoBack }) =>
    hasGoBack ? "space-between" : "flex-end"};
`;
