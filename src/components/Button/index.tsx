import React from "react";
import { ButtonProps, TouchableOpacityProps, ViewProps } from "react-native";

import { Container } from "./styles";

interface ButtonComponentProps extends TouchableOpacityProps {
  children: React.ReactNode;
  backgroundColor?: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonComponentProps> = ({
  children,
  backgroundColor,
  onPress,
  ...props
}) => {
  return (
    <Container {...props} onPress={onPress} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

export default Button;
