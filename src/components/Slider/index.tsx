import {Universe} from '@/types/Universe';
import React from 'react';
import {FlatList} from 'react-native';
import {Text} from '../Text';

import {Container, SliderItem} from './styles';

interface SliderProps {
  data: Universe[];
}

const Slider: React.FC<SliderProps> = ({data}) => {
  const renderItem = (item: Universe) => {
    return (
      <SliderItem>
        <Text size={14} color="#fff">
          {item.name}
        </Text>
      </SliderItem>
    );
  };

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default Slider;
