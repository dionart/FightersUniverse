import { BoxProps } from "@/utils/box-props";
import React from "react";
import { View } from "react-native";
import { Row } from "../Row";
import { Star } from "../Star";

interface RatingProps extends BoxProps {
  rate: number;
  disabled?: boolean;
}

export const Rating: React.FC<RatingProps> = ({ rate, disabled, ...props }) => {
  return (
    <Row {...props}>
      {Array.from({ length: 5 }).map((_, index: number) => (
        <Star disabled={disabled} filled={index < rate} />
      ))}
    </Row>
  );
};
