import styled from 'styled-components/native';

import DefaultLottieView from 'lottie-react-native';

/* -------------------------------------------------------------------------- */

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LottieView = styled(DefaultLottieView)`
  width: 150px;
`;
