import React, { FC } from 'react';

import { Text } from './custom-text.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  style?: string;
}

const CustomText: FC<Props> = ({ children, style }) => <Text style={style}>{children}</Text>;

export default CustomText;
