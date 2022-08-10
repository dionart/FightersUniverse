import theme from "@/config/theme";
import { BoxProps, applyBoxProps } from "@/utils/box-props";
import { Platform } from "react-native";
import styled from "styled-components/native";

interface OptionsContainerProps {
  center?: boolean;
}

export const Container = styled.View<OptionsContainerProps & BoxProps>`
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  background-color: ${theme.colors.white};
  border-top-color: ${theme.colors.grey["450"]};
  border-top-width: ${Platform.OS === "ios" ? 0.5 : 0}px;
  border-bottom-color: ${theme.colors.grey["450"]};
  border-bottom-width: ${Platform.OS === "android" ? 0.5 : 0}px;
  ${(props) => applyBoxProps(props)}
`;

export const FilterItem = styled.View`
  width: 100%;
  flex-direction: ${Platform.OS === "ios" ? "row" : "row-reverse"};
  align-items: center;
  justify-content: ${Platform.OS === "ios" ? "space-between" : "flex-end"};
  border-bottom-color: ${theme.colors.grey["450"]};
  border-bottom-width: 0.5px;
  padding-bottom: ${Platform.OS === "ios" ? "11px" : "21px"};
  padding-top: ${Platform.OS === "ios" ? "11px" : "21px"};
  padding-right: 20px;
`;
