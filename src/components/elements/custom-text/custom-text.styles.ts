import styled from 'styled-components/native';

/* -------------------------------------------------------------------------- */

interface TextProps {
  style?: string;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ theme }) => theme.text.size};
  font-family: ${({ theme }) => theme.text.family};
`;
