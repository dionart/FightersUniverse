import theme from "@/config/theme";
import styled from "styled-components/native";
import { DetectPlatform } from "@/utils/detect-platform";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${DetectPlatform(
    theme.colors.grey["200"],
    theme.colors.white
  )};
`;
