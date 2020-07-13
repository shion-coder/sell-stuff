import React, { FC } from 'react';
import { useFormikContext } from 'formik';

import { CustomButton } from 'components/elements';

/* -------------------------------------------------------------------------- */

interface Props {
  title: string;
}

const SubmitButton: FC<Props> = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <CustomButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
