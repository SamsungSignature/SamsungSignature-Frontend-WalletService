import {useHeaderHeight} from '@react-navigation/elements';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import imagePath from '../../../assets/imagePath';
import {RnBiometricsContext} from '../../../context/RnBiometricsContext';
import {AddCardStackParams} from '../../../routes/WalletAdd/AddCardNavigator';
import {Image, Info, StyledWrapper} from './BiometricCheck.stlye';

const BiometricCheck = () => {
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation<NavigationProp<AddCardStackParams>>();

  // 지문인증
  const rnBiometrics = useContext(RnBiometricsContext)?.current;
  rnBiometrics
    ?.simplePrompt({
      promptMessage: '생체 데이터 확인',
    })
    .then(resultObject => {
      const {success, error} = resultObject;
      if (success) {
        navigation.navigate('PaySecretInput');
      } else if (error === 'User cancellation') {
        navigation.navigate('AddCardMain');
      }
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <StyledWrapper $headerHeight={headerHeight}>
      <Info>생체 인식으로 인증하세요.</Info>
      <Image source={imagePath.biometriccheck} resizeMode="contain" />
      <Info />
    </StyledWrapper>
  );
};

export default BiometricCheck;
