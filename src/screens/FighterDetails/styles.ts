import theme from "@/config/theme";
import FastImage from "react-native-fast-image";
import styled from "styled-components/native";
import { DetectPlatform } from "@/utils/detect-platform";
import { s } from "react-native-size-matters";

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: ${DetectPlatform(
    theme.colors.grey["200"],
    theme.colors.white
  )};
`;

export const FighterImage = styled(FastImage)`
  height: ${s(182)}px;
  flex: 1;
`;

export const PriceTag = styled.View`
  width: ${s(84)}px;
  padding: 6px 14px;
  background-color: ${theme.colors.blue["200"]};
  border-radius: ${s(7)}px;
  align-items: center;
  margin-top: ${DetectPlatform(s(5), s(18))}px; ;
`;
