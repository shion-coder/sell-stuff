import React, { FC, useRef } from 'react';
import { ScrollView } from 'react-native';

import ImageInput from 'components/elements/image-input';

import { Wrapper, Container, Box } from './image-input-list.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  imageUris: string[];
  onRemoveImage: (uri: string) => void;
  onAddImage: (uri: string) => void;
}

const ImageInputList: FC<Props> = ({ imageUris, onRemoveImage, onAddImage }) => {
  const scrollView = useRef<ScrollView>(null);

  return (
    <Wrapper>
      <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current?.scrollToEnd()}>
        <Container>
          {imageUris.map((uri) => (
            <Box key={uri}>
              <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
            </Box>
          ))}

          <ImageInput onChangeImage={onAddImage} />
        </Container>
      </ScrollView>
    </Wrapper>
  );
};

export default ImageInputList;
