import React, { FC } from 'react';
import LottieView from 'lottie-react-native';

/* -------------------------------------------------------------------------- */

interface Props {
  visible: boolean;
}

const ActivityIndicator: FC<Props> = ({ visible }) =>
  !visible ? null : <LottieView source={require('assets/animations/loader.json')} autoPlay loop />;

export default ActivityIndicator;
