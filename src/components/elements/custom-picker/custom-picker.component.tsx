import React, { FC, useState } from 'react';
import { TouchableWithoutFeedback, Modal, FlatList, Button } from 'react-native';

import Screen from 'components/screen';
import PickerItem from './picker-item';

import { Category } from 'types';

import { Container, AppsIcon, DownIcon, Text } from './custom-picker.styles';

/* -------------------------------------------------------------------------- */

interface Props {
  items: Category[];
  icon?: string;
  placeholder?: string;
  selectedItem?: Category;
  onSelectedItem: (item: Category) => void;
}

const CustomPicker: FC<Props> = ({ items, icon, placeholder, selectedItem, onSelectedItem }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Container>
          {icon && <AppsIcon name={icon} />}

          <Text>{selectedItem ? selectedItem.label : placeholder}</Text>

          <DownIcon />
        </Container>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />

          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
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
