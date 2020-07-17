import styled from 'styled-components/native';

/* -------------------------------------------------------------------------- */

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 80px;
  width: 80px;
  border-radius: 40px;
  bottom: 20px;
  border-color: ${({ theme }) => theme.colors.white};
  border-width: 10px;
  align-items: center;
  justify-content: center;
`;
