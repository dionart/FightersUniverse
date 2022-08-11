import Svg, { Path } from "react-native-svg";
import React from "react";
import { TouchableOpacity } from "react-native";
import theme from "@/config/theme";
import { Container } from "./styles";

interface FilterIconProps {
  fillColor?: string;
  onPress?: () => void;
}

export const FilterIcon: React.FC<FilterIconProps> = ({
  fillColor = theme.colors.grey["500"],
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Svg width="21" height="21" viewBox="0 0 21 14" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0V2.33333H21V0H0ZM8.16667 14H12.8333V11.6667H8.16667V14ZM17.5 8.16667H3.5V5.83333H17.5V8.16667Z"
          fill={fillColor}
        />
      </Svg>
    </Container>
  );
};
