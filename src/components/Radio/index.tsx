import React from "react";
import { Platform } from "react-native";

import { Container, RadioFill } from "./styles";
import CheckSVG from "@/assets/images/check.svg";

interface RadioProps {
  selected: boolean;
  onSelect: () => void;
}

export const Radio: React.FC<RadioProps> = ({ selected, onSelect }) => {
  return (
    <Container onPress={onSelect} selected={selected}>
      {selected && Platform.OS === "ios" && <CheckSVG />}
      {selected && Platform.OS === "android" && <RadioFill />}
    </Container>
  );
};
