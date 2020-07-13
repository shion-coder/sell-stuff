import styled from 'styled-components/native';

/* -------------------------------------------------------------------------- */

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  flex: 1;
`;

export const Close = styled.View`
  position: absolute;
  top: 40px;
  left: 30px;
`;

export const Delete = styled.View`
  position: absolute;
  top: 40px;
  right: 30px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
