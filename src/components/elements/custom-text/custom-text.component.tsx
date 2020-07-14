import React, { FC } from 'react';
import { TextProps } from 'react-native';

import { Text } from './custom-text.styles';

/* -------------------------------------------------------------------------- */

interface Props extends TextProps {}

const CustomText: FC<Props> = ({ children, ...otherProps }) => <Text {...otherProps}>{children}</Text>;

export default CustomText;
