import * as ImagePicker from 'react-native-image-picker';

export const takePhoto = (id: string, uploadImage: any ) => {
  ImagePicker.launchCamera(
    {
      mediaType: 'photo',
      quality: 0.5,
    },
    resp => {
      if (resp.didCancel) return;
      if (!resp.assets![0].uri) return;

      uploadImage(resp, id);
    },
  );
};
