import { BoxProps } from "@/utils/box-props";
import React, { useState } from "react";
import { Row } from "../Row";
import { Star } from "../Star";

interface RatingProps extends BoxProps {
  rate: number;
  disabled?: boolean;
  size?: number;
  spaceBetweenStars?: number;
  onPress: (value: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  rate,
  disabled,
  size = 16,
  spaceBetweenStars = 0,
  onPress,
  ...props
}) => {
  const [selected, setSelected] = useState(rate);

  const handlePress = (index: number) => {
    if (index + 1 === selected) {
      setSelected(selected - 1);
      return;
    }

    setSelected(index + 1);
  };

  return (
    <Row {...props}>
      {Array.from({ length: 5 }).map((_, index: number) => (
        <Star
          key={index}
          space={spaceBetweenStars}
          size={size}
          disabled={disabled}
          filled={index < selected}
          onPress={() => handlePress(index)}
        />
      ))}
    </Row>
  );
};
