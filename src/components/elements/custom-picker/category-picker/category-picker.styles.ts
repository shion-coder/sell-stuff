import styled from 'styled-components/native';

import CustomText from 'components/elements/custom-text';

/* -------------------------------------------------------------------------- */

export const Container = styled.View`
  padding: 15px 30px;
  align-items: center;
  width: 33%;
`;

export const Text = styled(CustomText)`
  margin-top: 5px;
  text-align: center;
`;
