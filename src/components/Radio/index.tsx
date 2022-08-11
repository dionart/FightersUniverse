import React from "react";

import { Container, RadioFill } from "./styles";
import CheckSVG from "@/assets/images/check.svg";
import { DetectPlatform } from "@/utils/detect-platform";

interface RadioProps {
  selected: boolean;
  onSelect: () => void;
}

export const Radio: React.FC<RadioProps> = ({ selected, onSelect }) => {
  return (
    <Container onPress={onSelect} selected={selected}>
      {selected && DetectPlatform(<CheckSVG />, <RadioFill />)}
    </Container>
  );
};
