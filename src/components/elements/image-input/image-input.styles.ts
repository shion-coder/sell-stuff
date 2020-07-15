import styled from 'styled-components/native';

/* -------------------------------------------------------------------------- */

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
