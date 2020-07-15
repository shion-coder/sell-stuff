import * as ImagePicker from 'expo-image-picker';

/* -------------------------------------------------------------------------- */

export const requestImagePermission = async () => {
  const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();

  if (!granted) {
    alert('You need to enable permission to access library');
  }
};
