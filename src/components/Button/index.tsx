import React from "react";
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";
import { Text, TextProps } from "../Text";

import { Container } from "./styles";

interface ButtonComponentProps extends TouchableOpacityProps {
  children: string;
  backgroundColor?: string;
  onPress?: () => void;
  textProps?: TextProps;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonComponentProps> = ({
  children,
  backgroundColor,
  onPress,
  textProps,
  style,
  ...props
}) => {
  return (
    <Container
      style={style}
      onPress={onPress}
      backgroundColor={backgroundColor}
    >
      <Text {...textProps}>{children}</Text>
    </Container>
  );
};

export default Button;
