import React from 'react';

import {Container} from './styles';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  onPress,
}) => {
  return (
    <Container onPress={onPress} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

export default Button;
