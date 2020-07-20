import styled from 'styled-components/native';

/* -------------------------------------------------------------------------- */

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  z-index: 1;
  position: absolute;
`;
