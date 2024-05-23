import {NavigatorScreenParams, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {PERMISSIONS} from 'react-native-permissions';
import checkPermissions from '../functions/permission/checkPermissions';
import getAccessToken from '../functions/storage/getAccessToken';
import getRefreshToken from '../functions/storage/getRefreshToken';
import setTokens from '../functions/storage/setToken';
import Permissions from '../pages/wallet/Permissions';
import {useAppDispatch, useAppSelector} from '../stores/hooks';
import {setLogin, setPermiss} from '../stores/slices/user';
import {RootState} from '../stores/store';
import AccountNavigator, {AccountStackParams} from './AccountNavigator';
import WalletNavigator, {WalletStackParams} from './WalletNavigator';

interface RootStackParams extends ParamListBase {
  Wallet: NavigatorScreenParams<WalletStackParams>;
  Account: NavigatorScreenParams<AccountStackParams>;
  Permissions: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  const dispatch = useAppDispatch();

  // 권한 허용 확인
  const isPermiss = useAppSelector((state: RootState) => state.user.isPermiss);
  useEffect(() => {
    const permissionCheck = async () => {
      if (
        await checkPermissions([
          PERMISSIONS.ANDROID.READ_CONTACTS,
          PERMISSIONS.ANDROID.WRITE_CONTACTS,
          PERMISSIONS.ANDROID.CAMERA,
          PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
        ])
      ) {
        dispatch(setPermiss(true));
      }
    };

    permissionCheck();
  }, []);

  // 로그인 상태 확인
  const isLogin = useAppSelector((state: RootState) => state.user.isLogin);
  useEffect(() => {
    const loginCheck = async () => {
      const {accessToken, isExpired, created_at, expires_in} =
        await getAccessToken();
      const {refreshToken} = await getRefreshToken();
      if (accessToken && !isExpired) {
        const fakeResponse = {
          headers: {'set-cookie': [`refresh_token=${refreshToken};`]},
          data: {body: {access_token: accessToken, created_at, expires_in}},
        };
        await setTokens(fakeResponse);
        dispatch(setLogin(true));
      }
    };

    loginCheck();
  }, [isPermiss]);

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {isPermiss ? (
        isLogin ? (
          <RootStack.Screen name="Wallet" component={WalletNavigator} />
        ) : (
          <RootStack.Screen name="Account" component={AccountNavigator} />
        )
      ) : (
        <RootStack.Screen name="Permissions" component={Permissions} />
      )}
    </RootStack.Navigator>
  );
};

export type {RootStackParams};
export default RootNavigator;
