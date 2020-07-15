import React, { FC, useEffect } from 'react';
import { TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { requestImagePermission } from 'utils';

import { theme } from 'styles';
import { Container, Image } from './image-input.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  imageUri?: string;
  onChangeImage: (uri: string) => void;
}

const ImageInput: FC<Props> = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestImagePermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    }

    Alert.alert('Delete', 'Are you sure you want to delete this image ?', [
      {
        text: 'Yes',
        onPress: () => onChangeImage(''),
      },
      {
        text: 'No',
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Container>
        {imageUri ? (
          <Image source={{ uri: imageUri }} />
        ) : (
          <MaterialCommunityIcons name="camera" color={theme.colors.medium} size={40} />
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;
