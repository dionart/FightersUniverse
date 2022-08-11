import theme from "@/config/theme";
import styled from "styled-components/native";
import {
  scale,
  moderateVerticalScale,
  moderateScale,
} from "react-native-size-matters";

type FontWeight = "regular" | "medium" | "bold";

export type TextProps = {
  size?: number;
  color?: string;
  weight?: FontWeight;
  opacity?: number;
  lineHeight?: number;

  // Margin
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;

  textTransform?: "none" | "capitalize" | "lowercase" | "uppercase";

  align?: "left" | "right" | "center" | "justify";
};

export const Text = styled.Text<TextProps>`
  color: ${({ color = theme.colors.grey["900"] }) => color};
  font-size: ${({ size = 16 }) => scale(size)}px;
  opacity: ${({ opacity = 1 }) => opacity};
  text-transform: ${({ textTransform = "none" }) => textTransform};

  margin-top: ${({ marginTop = 0 }) => scale(marginTop)}px;
  margin-right: ${({ marginRight = 0 }) => scale(marginRight)}px;
  margin-bottom: ${({ marginBottom = 0 }) => scale(marginBottom)}px;
  margin-left: ${({ marginLeft = 0 }) => scale(marginLeft)}px;
  text-align: ${(props) => props.align || "auto"};
  font-family: ${({ weight = "regular" }) => theme.text.weight[weight]};
  line-height: ${({ lineHeight = 20 }) => scale(lineHeight)}px;
`;
