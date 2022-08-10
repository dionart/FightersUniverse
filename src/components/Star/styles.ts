import styled from "styled-components/native";

interface ContainerProps {
  space?: number;
  isFirst?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  margin-left: ${({ space = 0, isFirst }) => (isFirst ? 0 : space)}px;
`;
