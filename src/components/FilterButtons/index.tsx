import theme from "@/config/theme";
import React from "react";
import { Platform, View } from "react-native";
import Button from "../Button";

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
        backgroundColor={
          Platform.OS === "ios" ? theme.colors.grey["300"] : theme.colors.white
        }
        textProps={{
          color:
            Platform.OS === "ios"
              ? theme.colors.text
              : theme.colors.grey["900"],
        }}
      >
        Reset
      </Button>
      <Button
        onPress={onFilter}
        style={{ width: "50%" }}
        backgroundColor={
          Platform.OS === "ios" ? theme.colors.secondary : theme.colors.white
        }
        textProps={{
          color:
            Platform.OS === "ios"
              ? theme.colors.white
              : theme.colors.grey["900"],
        }}
      >
        Apply
      </Button>
    </Container>
  );
};
