import React, { FC } from 'react';
import { useFormikContext } from 'formik';

import { CustomTextInput, CustomTextInputProps } from 'components/elements';
import ErrorMessage from 'components/forms/error-message';

/* -------------------------------------------------------------------------- */

interface Props extends CustomTextInputProps {
  name: string;
}

interface FormikProps {
  [name: string]: string;
}

const FormField: FC<Props> = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext<FormikProps>();

  return (
    <>
      <CustomTextInput onChangeText={handleChange(name)} onBlur={() => setFieldTouched(name)} {...otherProps} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
