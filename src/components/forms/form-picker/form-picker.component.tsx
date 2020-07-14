import React, { FC } from 'react';
import { useFormikContext } from 'formik';

import { CustomPicker } from 'components/elements';
import ErrorMessage from 'components/forms/error-message';

import { Category, PickerProps } from 'types';

/* -------------------------------------------------------------------------- */

interface Props {
  items: Category[];
  name: string;
  placeholder: string;
  PickerItemComponent?: FC<PickerProps>;
  numColumns?: number;
  width?: string | number;
}

interface FormikProps {
  [name: string]: Category | string;
}

const FormPicker: FC<Props> = ({ items, name, placeholder, PickerItemComponent, numColumns, width }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<FormikProps>();

  return (
    <>
      <CustomPicker
        items={items}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name] as Category}
        PickerItemComponent={PickerItemComponent}
        numColumns={numColumns}
        width={width}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormPicker;
