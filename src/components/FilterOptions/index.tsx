import { DetectPlatform } from "@/utils/detect-platform";
import React from "react";
import { Radio } from "../Radio";
import { Text } from "../Text";

import { Container, FilterItem } from "./styles";

interface FilterOptionsProps {
  options: { name: string }[];
  selectedFilter: string;
  onSelect: (name: string) => void;
}

export const FilterOptions: React.FC<FilterOptionsProps> = ({
  options,
  selectedFilter,
  onSelect,
}) => {
  return (
    <Container paddingLeft={20}>
      {options.map((filter, index) => (
        <FilterItem key={index}>
          <Text
            textTransform="capitalize"
            marginLeft={DetectPlatform(0, 26)}
            size={17}
            lineHeight={22}
            weight="regular"
          >
            {filter.name}
          </Text>
          <Radio
            onSelect={() =>
              onSelect(filter.name === selectedFilter ? "" : filter.name)
            }
            selected={selectedFilter === filter.name}
          />
        </FilterItem>
      ))}
    </Container>
  );
};
