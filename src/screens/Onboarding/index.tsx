import React from 'react';

import {Container} from './styles';
import HeroSVG from '@/assets/images/sprite3.svg';
import HeroSVG2 from '@/assets/images/sprite1.svg';
import HeroSVG3 from '@/assets/images/sprite2.svg';
import {SpriteCarrousel} from '@/components/SpriteCarrousel';

export interface SpriteType {
  title: string;
  image: React.ReactElement;
}

const sprites: SpriteType[] = [
  {title: 'Access our Extented Catalog', image: <HeroSVG />},
  {title: 'Filter Fighters', image: <HeroSVG2 />},
  {title: 'And More...', image: <HeroSVG3 />},
];

export const Onboarding: React.FC = () => {
  return (
    <Container>
      <SpriteCarrousel data={sprites} />
    </Container>
  );
};
