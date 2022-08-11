import theme from "@/config/theme";
import { DetectPlatform } from "@/utils/detect-platform";
import React from "react";
import { Button } from "../Button";

import { Container } from "./styles";

interface FilterButtonsProps {
  onFilter: () => void;
  onClear: () => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  onFilter,
  onClear,
}) => {
  return (
    <Container>
      <Button
        onPress={onClear}
        style={{ width: "50%", marginRight: 15 }}
        backgroundColor={DetectPlatform(
          theme.colors.grey["300"],
          theme.colors.white
        )}
        textProps={{
          color: DetectPlatform(theme.colors.text, theme.colors.grey["900"]),
        }}
      >
        Reset
      </Button>
      <Button
        onPress={onFilter}
        style={{ width: "50%" }}
        backgroundColor={DetectPlatform(
          theme.colors.secondary,
          theme.colors.white
        )}
        textProps={{
          color: DetectPlatform(theme.colors.white, theme.colors.grey["900"]),
        }}
      >
        Apply
      </Button>
    </Container>
  );
};
