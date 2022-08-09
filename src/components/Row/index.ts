import { BoxProps, applyBoxProps } from "@/utils/box-props";
import styled from "styled-components/native";

interface RowProps {
  center?: boolean;
  spaceBetween?: boolean;
}

export const Row = styled.View<RowProps & BoxProps>`
  flex-direction: row;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? "space-between" : "flex-start"};
  ${(props) => applyBoxProps(props)}
`;
