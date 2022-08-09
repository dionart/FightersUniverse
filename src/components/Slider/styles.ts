import theme from '@/config';
import styled from 'styled-components/native';

interface SliderItemProps {
  isSelected: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const SliderItem = styled.TouchableOpacity<SliderItemProps>`
  align-items: center;
  min-width: 73px;
  padding: 14px;
  background-color: ${({isSelected}) =>
    isSelected ? theme.colors.blue['500'] : theme.colors.blue['200']};
  border-radius: 2px;
  margin-left: 10px;
`;
