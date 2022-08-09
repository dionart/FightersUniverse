import theme from "@/config";
import styled from "styled-components/native";

interface IconsContainer {
  hasGoBack: boolean;
}

export const Container = styled.View`
  width: 100%;
  background-color: ${theme.colors.white};
  /* height: 96px; */
  border-bottom-color: #c6c6c8;
  border-bottom-width: 1px;
  padding: 12px 20px 8px 12px;
`;

export const IconsContainer = styled.View<IconsContainer>`
  flex-direction: row;
  justify-content: ${({ hasGoBack }) =>
    hasGoBack ? "space-between" : "flex-end"};
`;
