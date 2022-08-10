import theme from "@/config";
import styled from "styled-components/native";

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 20px;
  height: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: ${({ selected }) =>
    selected ? "1px solid #007aff" : "1px solid #bfbfc1"};
`;

export const RadioFill = styled.View`
  padding: 6px;
  background-color: #007aff;
  border-radius: 15px;
`;
