import theme from "@/config/theme";
import { BoxProps, applyBoxProps } from "@/utils/box-props";
import { Platform } from "react-native";
import styled from "styled-components/native";

interface OptionsContainerProps {
  center?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.grey["200"]};
`;

export const OptionsContainer = styled.View<OptionsContainerProps & BoxProps>`
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  background-color: ${theme.colors.white};
  border-top-color: ${theme.colors.grey["450"]};
  border-top-width: ${Platform.OS === "ios" ? 0.5 : 0}px;
  border-bottom-color: ${theme.colors.grey["450"]};
  border-bottom-width: ${Platform.OS === "android" ? 0.5 : 0}px;
  ${(props) => applyBoxProps(props)}
`;

export const FilterItemLabel = styled.View<BoxProps>`
  background-color: ${Platform.OS === "android" ? "white" : "transparent "};
  ${(props) => applyBoxProps(props)}
`;
