import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomText from 'components/custom-text';

/* -------------------------------------------------------------------------- */

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 25px;
  flex-direction: row;
  width: 100%;
  padding: 15px;
  margin: 10px 0;
`;

export const Text = styled(CustomText)`
  flex: 1;
`;

const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({ size: 20, color: theme.colors.medium }))``;

export const AppsIcon = styled(Icon)`
  margin-right: 10px;
  top: 2px;
`;

export const DownIcon = styled(Icon).attrs({ name: 'chevron-down' })`
  top: 1px;
`;
