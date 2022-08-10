import Svg, { Path } from "react-native-svg";
import React from "react";
import { Container } from "./styles";
import theme from "@/config/theme";

interface StarProps {
  filled: boolean;
  disabled?: boolean;
  size?: number;
  space?: number;
  onPress?: () => void;
}

export const Star: React.FC<StarProps> = ({
  filled,
  onPress,
  disabled,
  size = 16,
  space = 0,
}) => {
  return (
    <Container onPress={onPress} space={space} disabled={disabled}>
      <Svg width={size} height={size} viewBox="0 0 38 38" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.9998 31.4547L7.44119 37.7741L9.64868 24.3895L0.297579 14.9104L13.2205 12.9576L18.9998 0.77989L24.7791 12.9576L37.702 14.9104L28.3509 24.3895L30.5584 37.7741L18.9998 31.4547Z"
          fill={filled ? theme.colors.yellow["900"] : theme.colors.grey["500"]}
        />
      </Svg>
    </Container>
  );
};
