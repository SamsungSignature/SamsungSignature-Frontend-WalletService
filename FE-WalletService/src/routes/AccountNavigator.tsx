import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Alert} from 'react-native';
import AppBackButton from '../components/common/appHeader/AppBackButton';
import AppHeader from '../components/common/appHeader/AppHeader';
import AccountMain from '../pages/account/AccountMain';
import AccountServices from '../pages/account/AccountService';
import IdVerifyFunnel from '../pages/account/IdVerifyFunnel';
import SelectAge from '../pages/account/SelectAge';
import Signin from '../pages/account/Signin';
import SignupFunnel from '../pages/account/SignupFunnel';
import {RootStackParams} from './RootNavigator';

interface SignupFunnelParams {
  lastName: string;
  firstName: string;
  registNums: string;
  phoneNums: string;
}

interface AccountStackParams extends ParamListBase {
  AccountMain: undefined;
  AccountServices: undefined;
  Signin: undefined;
  SelectAge: undefined;
  IdVerifyFunnel: undefined;
  SignupFunnel: SignupFunnelParams;
}

const AccountStack = createNativeStackNavigator<AccountStackParams>();

const AccountNavigator = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const toMain = () => {
    Alert.alert('정보가 저장되지 않을 수 있습니다.', '뒤로 가시겠습니까?', [
      {text: '예', onPress: () => navigation.navigate('AccountMain')},
      {text: '아니오'},
    ]);
  };

  return (
    <AccountStack.Navigator>
      <AccountStack.Group
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          headerTransparent: true,
          headerBackVisible: false,
        }}>
        <AccountStack.Screen name="AccountMain" component={AccountMain} />
        <AccountStack.Screen
          name="AccountServices"
          component={AccountServices}
        />
        <AccountStack.Screen name="Signin" component={Signin} />
        <AccountStack.Screen name="SelectAge" component={SelectAge} />
        <AccountStack.Screen name="IdVerifyFunnel" component={IdVerifyFunnel} />
        <AccountStack.Screen
          name="SignupFunnel"
          component={SignupFunnel}
          options={{
            title: '계정 생성',
            headerShown: true,
            header: AppHeader,
            headerLeft: () => AppBackButton({canGoBack: true}, toMain),
          }}
        />
      </AccountStack.Group>
    </AccountStack.Navigator>
  );
};

export type {AccountStackParams, SignupFunnelParams};
export default AccountNavigator;
