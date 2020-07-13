import styled from 'styled-components/native';

/* -------------------------------------------------------------------------- */

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

export const Details = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
`;
