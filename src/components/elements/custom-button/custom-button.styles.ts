import styled from 'styled-components/native';

/* -------------------------------------------------------------------------- */

interface TouchableButtonProps {
  style?: string;
}

export const TouchableButton = styled.TouchableOpacity<TouchableButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.text.size};
  text-transform: uppercase;
  font-weight: bold;
`;
