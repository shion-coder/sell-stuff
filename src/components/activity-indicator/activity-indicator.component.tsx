import React, { FC } from 'react';
import LottieView from 'lottie-react-native';

import { Container } from './activity-indicator.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  visible: boolean;
}

const ActivityIndicator: FC<Props> = ({ visible }) =>
  !visible ? null : (
    <Container>
      <LottieView source={require('assets/animations/loader.json')} autoPlay loop />
    </Container>
  );

export default ActivityIndicator;
