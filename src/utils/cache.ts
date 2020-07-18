import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

/* -------------------------------------------------------------------------- */

const prefix = 'cache';
const expiryInMinutes = 5;

const isExpired = (item: any) => {
  const now = moment(Date.now());
  const storedItem = moment(item.timestamp);
  return now.diff(storedItem, 'minutes') > expiryInMinutes;
};

const store = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value!);

    if (!item) {
      return null;
    }

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default { store, get };
