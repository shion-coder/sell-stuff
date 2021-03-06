import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/* -------------------------------------------------------------------------- */

interface ContainerProps {
  width?: string | number;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 25px;
  flex-direction: row;
  width: ${({ width }) => (typeof width === 'string' ? width : typeof width === 'number' ? width + 'px' : '100%')};
  padding: 15px;
  margin: 10px 0;
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({ placeholderTextColor: theme.colors.medium }))`
  font-size: ${({ theme }) => theme.text.size};
  font-family: ${({ theme }) => theme.text.family};
  width: 100%;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({ size: 20, color: theme.colors.medium }))`
  margin-right: 10px;
  top: 2px;
`;
