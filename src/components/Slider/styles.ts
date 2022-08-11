import theme from "@/config/theme";
import styled from "styled-components/native";
import { s } from "react-native-size-matters";

interface SliderItemProps {
  isSelected: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const SliderItem = styled.TouchableOpacity<SliderItemProps>`
  align-items: center;
  min-width: ${s(73)}px;
  padding: ${s(14)}px;
  background-color: ${({ isSelected }) =>
    isSelected ? theme.colors.blue["500"] : theme.colors.secondary};
  border-radius: ${s(2)}px;
  margin-left: ${s(10)}px;
`;
