import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomText from 'components/elements/custom-text';

/* -------------------------------------------------------------------------- */

interface ContainerProps {
  width?: string | number;
}

interface TextProps {
  isSelectedItem: boolean;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 25px;
  flex-direction: row;
  width: ${({ width }) => (typeof width === 'string' ? width : typeof width === 'number' ? width + 'px' : '100%')};
  padding: 15px;
  margin: 10px 0;
`;

export const Text = styled(CustomText)<TextProps>`
  flex: 1;
  color: ${({ isSelectedItem, theme }) => (isSelectedItem ? theme.colors.dark : theme.colors.medium)};
`;

const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({ size: 20, color: theme.colors.medium }))``;

export const AppsIcon = styled(Icon)`
  margin-right: 10px;
  top: 2px;
`;

export const DownIcon = styled(Icon).attrs({ name: 'chevron-down' })`
  top: 1px;
`;
