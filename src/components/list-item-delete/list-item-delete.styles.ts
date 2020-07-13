import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/* -------------------------------------------------------------------------- */

export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.danger};
  width: 90px;
  justify-content: center;
  align-items: center;
`;

export const TrashIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  name: 'trash-can',
  color: theme.colors.white,
  size: 35,
}))``;
