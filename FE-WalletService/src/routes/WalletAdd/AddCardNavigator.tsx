import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppBackButton from '../../components/common/appHeader/AppBackButton';
import AppHeader from '../../components/common/appHeader/AppHeader';
import AddCardConfirm from '../../pages/wallet/AddCard/AddCardConfirm';
import AddCardTerms from '../../pages/wallet/AddCard/AddCardTerms';
import BiometricCheck from '../../pages/wallet/AddCard/BiometricCheck';
import CardInputs from '../../pages/wallet/AddCard/CardInputs';
import PaySecretConfirm from '../../pages/wallet/AddCard/PaySecretConfirm';
import PaySecretInput from '../../pages/wallet/AddCard/PaySecretInput';
import SignInput from '../../pages/wallet/AddCard/SignInput';

interface AddCardStackParams extends ParamListBase {
  CardInputs: undefined;
  AddCardTerms: undefined;
  BiometricCheck: undefined;
  PaySecretInput: undefined;
  PaySecretConfirm: {input: string};
  SignInput: undefined;
  AddCardConfirm: undefined;
}

const AddCardStack = createNativeStackNavigator<AddCardStackParams>();

const AddCardNavigator = () => {
  const navigation = useNavigation<NavigationProp<AddCardStackParams>>();
  const toPrev = () => {
    navigation.navigate('AddCardMain');
  };

  return (
    <AddCardStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTransparent: true,
        header: AppHeader,
        headerLeft: () => AppBackButton({canGoBack: true}, toPrev),
      }}>
      <AddCardStack.Screen
        name="CardInputs"
        component={CardInputs}
        options={{title: '카드 추가'}}
      />
      <AddCardStack.Screen
        name="AddCardTerms"
        component={AddCardTerms}
        options={{title: '카드'}}
      />
      <AddCardStack.Screen
        name="BiometricCheck"
        component={BiometricCheck}
        options={{title: '생체 데이터 확인'}}
      />
      <AddCardStack.Screen
        name="PaySecretInput"
        component={PaySecretInput}
        options={{title: '결제 비밀번호 등록'}}
      />
      <AddCardStack.Screen
        name="PaySecretConfirm"
        component={PaySecretConfirm}
        options={{title: '비밀번호 확인'}}
      />
      <AddCardStack.Screen
        name="SignInput"
        component={SignInput}
        options={{title: '서명 입력'}}
      />
      <AddCardStack.Screen
        name="AddCardConfirm"
        component={AddCardConfirm}
        options={{headerShown: false}}
      />
    </AddCardStack.Navigator>
  );
};

export type {AddCardStackParams};
export default AddCardNavigator;
