import React, { FC } from 'react';
import { useFormikContext } from 'formik';

import { ImageInputList } from 'components/elements';
import ErrorMessage from 'components/forms/error-message';

/* -------------------------------------------------------------------------- */

interface Props {
  name: string;
}

interface FormikProps {
  [name: string]: string[];
}

const FormImagePicker: FC<Props> = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<FormikProps>();
  const imageUris = values[name];

  const handleAdd = (uri: string) => setFieldValue(name, [...imageUris, uri]);

  const handleRemove = (uri: string) =>
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );

  return (
    <>
      <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />

      <ErrorMessage error={errors[name] as string} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
