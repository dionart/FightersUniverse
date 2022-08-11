import theme from "@/config/theme";
import styled, { css } from "styled-components/native";
import { DetectPlatform } from "@/utils/detect-platform";

interface ButtonContainerProps {
  backgroundColor?: string;
}

export const Container = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  background-color: ${({ backgroundColor = theme.colors.white }) =>
    backgroundColor};
  padding: 14px 0;
  border-radius: ${DetectPlatform(22, 6)}px;
  align-items: center;
  elevation: 3;
`;
