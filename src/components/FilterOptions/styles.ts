import theme from "@/config/theme";
import { BoxProps, applyBoxProps } from "@/utils/box-props";
import styled from "styled-components/native";
import { DetectPlatform } from "@/utils/detect-platform";
import { s } from "react-native-size-matters";

interface OptionsContainerProps {
  center?: boolean;
}

export const Container = styled.View<OptionsContainerProps & BoxProps>`
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  background-color: ${theme.colors.white};
  border-top-color: ${theme.colors.grey["450"]};
  border-top-width: ${DetectPlatform(s(0.5), s(0))}px;
  border-bottom-color: ${theme.colors.grey["450"]};
  border-bottom-width: ${DetectPlatform(s(0), s(0.5))}px;
  ${(props) => applyBoxProps(props)}
`;

export const FilterItem = styled.View`
  width: 100%;
  flex-direction: ${DetectPlatform("row", "row-reverse")};
  align-items: center;
  justify-content: ${DetectPlatform("space-between", "flex-end")};
  border-bottom-color: ${theme.colors.grey["450"]};
  border-bottom-width: ${s(0.5)}px;
  padding-bottom: ${DetectPlatform(`${s(11)}px`, `${s(21)}px`)};
  padding-top: ${DetectPlatform(`${s(11)}px`, `${s(21)}px`)};
  padding-right: ${s(20)}px;
`;
