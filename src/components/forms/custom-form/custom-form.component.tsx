import React, { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';

/* -------------------------------------------------------------------------- */

interface Props {
  initialValues: object;
  validationSchema: object;
  onSubmit: (values: any, formikHelpers: FormikHelpers<object>) => void | Promise<void>; //FIXME: Fix type void later
}

const CustomForm: FC<Props> = ({ children, initialValues, validationSchema, onSubmit }) => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {() => <>{children}</>}
  </Formik>
);

export default CustomForm;
