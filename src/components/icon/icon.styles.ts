import styled from 'styled-components/native';

/* -------------------------------------------------------------------------- */

interface ContainerProps {
  style?: string;
  background?: string;
  size: number;
}

export const Container = styled.View<ContainerProps>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  border-radius: ${({ size }) => size / 2 + 'px'};
  background-color: ${({ theme, background }) => background || theme.colors.black};
  justify-content: center;
  align-items: center;
`;
