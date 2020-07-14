import styled from 'styled-components/native';

import { CustomText } from 'components/elements';

/* -------------------------------------------------------------------------- */

interface ContainerProps {
  style?: string;
}

export const TouchableHighlight = styled.TouchableHighlight.attrs(({ theme }) => ({
  underlayColor: theme.colors.light,
}))``;

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const Details = styled.View`
  margin-left: 10px;
  justify-content: center;
  flex: 1;
`;

export const Title = styled(CustomText)`
  font-weight: bold;
`;

export const Description = styled(CustomText)`
  color: ${({ theme }) => theme.colors.medium};
`;
