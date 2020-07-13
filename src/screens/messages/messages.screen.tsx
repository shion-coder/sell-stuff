import React, { FC, useState } from 'react';
import { FlatList } from 'react-native';

import Screen from 'components/screen';
import ListItem from 'components/list-item';
import Separator from 'components/separator';
import ListItemDelete from 'components/list-item-delete';

import { Message } from 'types';

/* -------------------------------------------------------------------------- */

const dummyMessages: Message[] = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('assets/images/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('assets/images/mosh.jpg'),
  },
];

const Messages: FC = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: Message) => setMessages(messages.filter((m) => m.id !== message.id));

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            description={item.description}
            onPress={() => console.log}
            renderRightActions={() => <ListItemDelete onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('assets/images/mosh.jpg'),
            },
          ]);

          setRefreshing(false);
        }}
      />
    </Screen>
  );
};

export default Messages;
