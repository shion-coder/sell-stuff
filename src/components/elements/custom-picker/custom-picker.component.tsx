import React, { FC, useState } from 'react';
import { TouchableWithoutFeedback, Modal, FlatList, Button } from 'react-native';

import Screen from 'components/screen';
import PickerItem from './picker-item';

import { Category, PickerProps } from 'types';

import { Container, AppsIcon, DownIcon, Text } from './custom-picker.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  items: Category[];
  icon?: string;
  placeholder?: string;
  selectedItem?: Category;
  onSelectedItem: (item: Category) => void;
  PickerItemComponent?: FC<PickerProps>;
  numColumns?: number;
  width?: string | number;
}

const CustomPicker: FC<Props> = ({
  items,
  icon,
  placeholder,
  selectedItem,
  onSelectedItem,
  PickerItemComponent = PickerItem,
  numColumns = 1,
  width,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Container width={width}>
          {icon && <AppsIcon name={icon} />}

          <Text isSelectedItem={!!selectedItem}>{selectedItem ? selectedItem.name : placeholder}</Text>

          <DownIcon />
        </Container>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />

          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default CustomPicker;
