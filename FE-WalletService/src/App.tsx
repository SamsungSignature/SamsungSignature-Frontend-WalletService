/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect} from 'react';
import {Linking} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import styled from 'styled-components/native';
import Loading from './components/common/Loading';
import RnBiometricsContainer from './context/RnBiometricsContext';
import clearAllStorage from './functions/storage/clearAllStorage';
import RootNavigator from './routes/RootNavigator';
import {store} from './stores/store';

// 제스처 핸들러
const GestureHandlerContainer = styled(GestureHandlerRootView)`
  flex: 1;
`;

function App() {
  // 리액트 쿼리 클라이언트
  const queryClient = new QueryClient();

  // 스플래시 스크린
  useEffect(() => {
    clearAllStorage();

    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  const linking = {
    prefixes: [
      'fakewallet://',
      'https://fakewallet.com',
      'https://*.fakewallet.com',
    ],
    getInitialURL: async () => {
      const url = await Linking.getInitialURL();
      return url;
    },
    subscribe: (listener: (url: string) => void) => {
      console.log('linking subscribe to ', listener);
      const onReceiveURL = (event: {url: string}) => {
        const {url} = event;
        console.log('link has url', url, event);

        return listener(url);
      };
      const linkingSubscription = Linking.addEventListener('url', onReceiveURL);
      return () => {
        console.log('linking unsubscribe to ', listener);
        linkingSubscription.remove();
      };
    },
    config: {
      screens: {
        Wallet: {
          path: 'wallet',
          screens: {
            WalletMain: '',
            WalletAdd: 'add',
            AddCardMain: 'add-card/main',
            AddCard: {
              path: 'add-card',
              screens: {
                CardInputs: 'inputs',
                AddCardTerms: 'terms',
                BiometricCheck: 'biometric-check',
                PaySecretInput: 'paysecret/input',
                PaySecretConfirm: 'paysecret/confirm/:input',
                SignInput: 'sign',
                AddCardConfirm: 'confirm',
              },
            },
            SelectCard: 'select',
            Payment: 'payment',
          },
        },
        Account: {
          path: 'account',
          screens: {
            AccountMain: '',
            AccountServices: 'services',
            Signin: 'signin',
            SelectAge: 'selectage',
            IdVerifyFunnel: 'idverify',
            SignupFunnel: 'signup/:lastName/:firstName/:registNums/:phoneNums',
          },
        },
        Permissions: 'permissions',
      },
    },
  };

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerContainer>
          <NavigationContainer linking={linking} fallback={<Loading />}>
            <RnBiometricsContainer>
              <RootNavigator />
            </RnBiometricsContainer>
          </NavigationContainer>
        </GestureHandlerContainer>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
