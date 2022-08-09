import styled from 'styled-components/native';

interface ButtonContainerProps {
  backgroundColor?: string;
}

export const Container = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  background-color: ${({backgroundColor = '#FFF'}) => backgroundColor};
  padding: 14px 0;
  border-radius: 22px;
  align-items: center;
`;
