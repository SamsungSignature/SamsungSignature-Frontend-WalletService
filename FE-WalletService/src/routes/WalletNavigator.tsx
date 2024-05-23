import {ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Linking} from 'react-native';
import {theme} from '../assets/styles/theme.css';
import AppHeader from '../components/common/appHeader/AppHeader';
import Logo from '../components/wallet/main/Logo';
import AddCardMain from '../pages/wallet/AddCard/AddCardMain';
import Payment from '../pages/wallet/Payment';
import SelectCard from '../pages/wallet/SelectCard';
import WalletAdd from '../pages/wallet/WalletAdd';
import WalletMain from '../pages/wallet/WalletMain';
import AddCardNavigator, {
  AddCardStackParams,
} from './WalletAdd/AddCardNavigator';

interface WalletStackParams extends AddCardStackParams, ParamListBase {
  WalletMain: undefined;
  WalletAdd: undefined;
  AddCardMain: undefined;
  AddCard: undefined;
  SelectCard: {data?: string};
  Payment: {data?: string; card: string};
}

const WalletStack = createNativeStackNavigator<WalletStackParams>();

const WalletNavigator = () => {
  // 로그인 전 받은 Linking 처리
  useEffect(() => {
    // THIS IS THE MAIN POINT OF THIS ANSWER
    const navigateToInitialUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        await Linking.openURL(initialUrl);
      }
    };
    navigateToInitialUrl();
  }, []);

  return (
    <WalletStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTransparent: true,
        header: AppHeader,
        navigationBarColor: theme.colors.background,
      }}>
      <WalletStack.Screen
        name="WalletMain"
        component={WalletMain}
        options={{
          headerTitle: Logo,
          headerStyle: {backgroundColor: theme.colors.background},
        }}
      />
      <WalletStack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
          statusBarHidden: true,
          navigationBarColor: '#000',
        }}
      />
      <WalletStack.Screen
        name="WalletAdd"
        component={WalletAdd}
        options={{title: '추가'}}
      />
      <WalletStack.Screen
        name="AddCardMain"
        component={AddCardMain}
        options={{title: '결제 카드 추가'}}
      />
      <WalletStack.Screen
        name="AddCard"
        component={AddCardNavigator}
        options={{headerShown: false}}
      />
      <WalletStack.Screen
        name="SelectCard"
        component={SelectCard}
        options={{headerShown: false}}
      />
    </WalletStack.Navigator>
  );
};

export type {WalletStackParams};
export default WalletNavigator;
