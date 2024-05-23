import React from 'react';
import {Alert} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import styled from 'styled-components/native';
import iconPath from '../../../assets/iconPath';
import {theme} from '../../../assets/styles/theme.css';
import STYLES from '../../../constants/appStyles';
import AppButton from '../../common/AppButton';

const AuthView = styled.View`
  flex: 3;
  align-items: center;
  justify-content: flex-end;
`;

const FingerPrintView = styled.Pressable`
  padding: 24px;
`;

const PasswordView = styled.View`
  border-radius: ${theme.radii.circle};
  overflow: hidden;
  padding: 8px;
`;

interface AuthProps {
  onPress: (props: any) => void;
}

const Auth = ({onPress}: AuthProps) => {
  const noService = () => {
    Alert.alert('지원하지 않는 기능입니다.');
  };

  return (
    <AuthView>
      <FingerPrintView onPress={onPress} onLongPress={onPress}>
        <WithLocalSvg asset={iconPath.fingerprint} />
      </FingerPrintView>
      <PasswordView>
        <AppButton
          text="비밀번호"
          style={STYLES.BUTTONS.BORDER_MINI}
          type="pressable"
          onPress={noService}
        />
      </PasswordView>
    </AuthView>
  );
};

export default Auth;
