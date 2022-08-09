import styled from 'styled-components/native';
import {applyBoxProps, BoxProps} from '../../utils/box-props';

export const Box = styled.View<BoxProps>`
  ${props => applyBoxProps(props)}
`;
