import React, { FC, useState } from 'react';
import { FormikHelpers } from 'formik';
import * as Yup from 'yup';

import Screen from 'components/screen';
import {
  CustomForm as Form,
  FormField as Field,
  FormPicker as Picker,
  SubmitButton as Submit,
  FormImagePicker,
} from 'components/forms';
import CategoryPicker from 'components/elements/custom-picker/category-picker';

import { useLocation } from 'hooks';
import { Category } from 'types';
import { addListing, ListingPost } from 'api';

import { Container } from './listing-edit.styles';
import Upload from 'screens/upload';
import { Alert } from 'react-native';

/* -------------------------------------------------------------------------- */

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, 'Please select at least one image'),
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(100000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories: Category[] = [
  {
    id: 1,
    name: 'Furniture',
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
  },
  {
    id: 2,
    name: 'Cars',
    backgroundColor: '#fd9644',
    icon: 'car',
  },
  {
    id: 3,
    name: 'Cameras',
    backgroundColor: '#fed330',
    icon: 'camera',
  },
  {
    id: 4,
    name: 'Games',
    backgroundColor: '#26de81',
    icon: 'cards',
  },
  {
    id: 5,
    name: 'Clothing',
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
  },
  {
    id: 6,
    name: 'Sports',
    backgroundColor: '#45aaf2',
    icon: 'basketball',
  },
  {
    id: 7,
    name: 'Movies & Music',
    backgroundColor: '#4b7bec',
    icon: 'headphones',
  },
  {
    id: 8,
    name: 'Books',
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
  },
  {
    id: 9,
    name: 'Other',
    backgroundColor: '#778ca3',
    icon: 'application',
  },
];

const ListingEdit: FC = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = async (listing: ListingPost, formikHelpers: FormikHelpers<object>) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await addListing({ ...listing, location }, (progress) => setProgress(progress));

    if (!result.ok) {
      setError(true);
      return Alert.alert('Error', 'Could not save the listing', [
        { text: 'Ok', onPress: () => setUploadVisible(false) },
      ]);
    }

    setError(false);
    formikHelpers.resetForm();
  };

  return (
    <Screen>
      <Container>
        <Upload progress={progress} error={error} onDone={() => setUploadVisible(false)} visible={uploadVisible} />
        <Form
          initialValues={{
            images: [],
            title: '',
            price: '',
            description: '',
            category: null,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <FormImagePicker name="images" />

          <Field name="title" placeholder="Title" maxLength={255} />

          <Field name="price" placeholder="Price" keyboardType="numeric" maxLength={9} />

          <Picker
            items={categories}
            name="category"
            placeholder="Category"
            PickerItemComponent={CategoryPicker}
            numColumns={3}
          />

          <Field name="description" placeholder="Description" maxLength={255} numberOfLines={3} />

          <Submit title="Post" />
        </Form>
      </Container>
    </Screen>
  );
};

export default ListingEdit;
