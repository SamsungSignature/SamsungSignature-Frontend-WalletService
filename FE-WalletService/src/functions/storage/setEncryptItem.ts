import EncryptedStorage from 'react-native-encrypted-storage';

const setEncryptItem = async (key: string, value: any) => {
  const jsonString = JSON.stringify(value);

  await EncryptedStorage.setItem(key, jsonString);
};

export default setEncryptItem;
