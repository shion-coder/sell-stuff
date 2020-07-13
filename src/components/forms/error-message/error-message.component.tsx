import React, { FC } from 'react';

import { Error } from './error-message.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  error?: string;
  visible?: boolean;
}

const ErrorMessage: FC<Props> = ({ error, visible }) => {
  return error && visible ? <Error>{error}</Error> : null;
};

export default ErrorMessage;
