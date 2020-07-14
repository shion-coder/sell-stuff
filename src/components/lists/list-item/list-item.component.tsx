import React, { FC } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from 'styles';

import { TouchableHighlight, Container, Image, Details, Title, Description } from './list-item.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  style?: string;
  image?: any; //FIXME: Fix type any later
  title: string;
  description?: string;
  IconComponent?: JSX.Element;
  onPress?: () => void;
  renderRightActions?: () => void;
}

const ListItem: FC<Props> = ({ style, image, title, description, IconComponent, onPress, renderRightActions }) => (
  <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight onPress={onPress}>
      <Container style={style}>
        {IconComponent}

        {image && <Image source={image} />}

        <Details>
          <Title numberOfLines={1}>{title}</Title>

          {description && <Description numberOfLines={2}>{description}</Description>}
        </Details>

        <MaterialCommunityIcons name="chevron-right" color={theme.colors.medium} size={25} />
      </Container>
    </TouchableHighlight>
  </Swipeable>
);

export default ListItem;
