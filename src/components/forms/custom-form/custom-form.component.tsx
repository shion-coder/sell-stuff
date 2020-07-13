import React, { FC } from 'react';
import { Formik } from 'formik';

/* -------------------------------------------------------------------------- */

interface Props {
  initialValues: object;
  validationSchema: object;
  onSubmit: (values: object) => void;
}

const CustomForm: FC<Props> = ({ children, initialValues, validationSchema, onSubmit }) => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {() => <>{children}</>}
  </Formik>
);

export default CustomForm;
