import theme from "@/config/theme";
import { BoxProps, applyBoxProps } from "@/utils/box-props";
import styled from "styled-components/native";
import { DetectPlatform } from "@/utils/detect-platform";

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
  border-top-width: ${DetectPlatform(0.5, 0)}px;
  border-bottom-color: ${theme.colors.grey["450"]};
  border-bottom-width: ${DetectPlatform(0, 0.5)}px;
  ${(props) => applyBoxProps(props)}
`;

export const FilterItemLabel = styled.View<BoxProps>`
  background-color: ${DetectPlatform("transparent", "white")};
  ${(props) => applyBoxProps(props)}
`;
