import theme from "@/config/theme";
import FastImage from "react-native-fast-image";
import styled from "styled-components/native";
import { s } from "react-native-size-matters";

export const Container = styled.TouchableOpacity`
  padding: 24px 24px 13px 13px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: ${theme.colors.grey["350"]};
  border-bottom-width: 1px;
`;

export const FighterImage = styled(FastImage)`
  width: ${s(73)}px;
  height: ${s(73)}px;
`;
