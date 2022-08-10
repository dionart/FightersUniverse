import { Platform } from "react-native";
import styled, { css } from "styled-components/native";

interface ButtonContainerProps {
  backgroundColor?: string;
}

export const Container = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  background-color: ${({ backgroundColor = "#FFF" }) => backgroundColor};
  padding: 14px 0;
  border-radius: ${Platform.OS === "ios" ? 22 : 6}px;
  align-items: center;
  elevation: 3;
`;
