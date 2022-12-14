import theme from "@/config/theme";
import styled from "styled-components/native";
import { s } from "react-native-size-matters";

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${s(20)}px;
  height: ${s(20)}px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: ${({ selected }) =>
    selected
      ? `1px solid ${theme.colors.secondary}`
      : `1px solid ${theme.colors.grey["475"]}`};
`;

export const RadioFill = styled.View`
  padding: 6px;
  background-color: ${theme.colors.secondary};
  border-radius: 15px;
`;
