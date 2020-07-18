import React, { FC } from 'react';
import { Modal } from 'react-native';
import * as Progress from 'react-native-progress';

import { theme } from 'styles';
import { Container, LottieView } from './upload.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  progress: number;
  error: boolean;
  visible: boolean;
  onDone: () => void;
}

const Upload: FC<Props> = ({ progress = 0, error, onDone, visible = false }) => (
  <Modal visible={visible}>
    <Container>
      {progress < 1 ? (
        <Progress.Bar progress={progress} color={theme.colors.primary} width={200} />
      ) : (
        !error && (
          <LottieView
            source={require('assets/animations/done.json')}
            onAnimationFinish={onDone}
            autoPlay
            loop={false}
          />
        )
      )}
    </Container>
  </Modal>
);

export default Upload;
