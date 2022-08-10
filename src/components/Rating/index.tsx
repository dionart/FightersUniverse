import { RootState } from "@/store";
import { BoxProps } from "@/utils/box-props";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row } from "../Row";
import { Star } from "../Star";

interface RatingProps extends BoxProps {
  rate: number;
  disabled?: boolean;
  size?: number;
  spaceBetweenStars?: number;
  onPress?: (value: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  rate,
  disabled,
  size = 16,
  spaceBetweenStars = 0,
  onPress,
  ...props
}) => {
  const rateValue = useSelector(
    (state: RootState) => state.app.rateFilterValue
  );
  const [selected, setSelected] = useState(rate);

  useEffect(() => {
    rate !== -1 ? setSelected(rate) : setSelected(rateValue);
  }, [rateValue, rate]);

  const handlePress = (index: number) => {
    if (index + 1 === selected) {
      onPress && onPress(selected - 1);
      setSelected(selected - 1);
      return;
    }

    onPress && onPress(index + 1);
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
