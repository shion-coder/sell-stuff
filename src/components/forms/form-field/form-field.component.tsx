import React, { FC } from 'react';
import { useFormikContext } from 'formik';

import { CustomTextInput, CustomTextInputProps } from 'components/elements';
import ErrorMessage from 'components/forms/error-message';

/* -------------------------------------------------------------------------- */

interface Props extends CustomTextInputProps {
  name: string;
  width?: string | number;
}

interface FormikProps {
  [name: string]: string;
}

const FormField: FC<Props> = ({ name, width, ...otherProps }) => {
  const { values, setFieldValue, setFieldTouched, errors, touched } = useFormikContext<FormikProps>();

  return (
    <>
      <CustomTextInput
        width={width}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
