import theme from "@/config";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

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
  justify-content: center;
  width: 100%;
`;

export const PaginationItem = styled.View<PaginationItemProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ active }) =>
    active ? theme.colors.blue["500"] : "#fff"};
  margin-left: 8px;
`;

export const SpriteItem = styled.View`
  width: ${width}px;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  width: 50%;
`;
