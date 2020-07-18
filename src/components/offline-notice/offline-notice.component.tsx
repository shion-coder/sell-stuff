import React, { FC } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';

import { Container, Text } from './offline-notice.styles';

/* -------------------------------------------------------------------------- */

const OfflineNotice: FC = () => {
  const netInfo = useNetInfo();

  return netInfo.type !== 'unknown' && !netInfo.isInternetReachable ? (
    <Container>
      <Text>No Internet Connection</Text>
    </Container>
  ) : null;
};

export default OfflineNotice;
