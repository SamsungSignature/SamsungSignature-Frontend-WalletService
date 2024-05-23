import EncryptedStorage from 'react-native-encrypted-storage';

const getEncryptItem = async <T>(key: string) => {
  const jsonString = await EncryptedStorage.getItem(key);

  if (!jsonString) {
    return null;
  }

  const item: T = JSON.parse(jsonString);

  return item;
};

export default getEncryptItem;
