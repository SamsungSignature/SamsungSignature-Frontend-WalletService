import {useHeaderHeight} from '@react-navigation/elements';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import useSecretInput from '../../../hooks/useSecretInput';
import {AddCardStackParams} from '../../../routes/WalletAdd/AddCardNavigator';
import {Wrapper} from '../Common.style';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Info = styled.Text``;

const PaySecretConfirm = () => {
  const headerHeight = useHeaderHeight();
  const [input, setInput, SecretInput, SecretKeyboard] = useSecretInput(6);

  // 네비게이션
  const params =
    useRoute<RouteProp<AddCardStackParams, 'PaySecretConfirm'>>().params;
  const navigation = useNavigation<NavigationProp<AddCardStackParams>>();
  useEffect(() => {
    if (input.length === 6) {
      if (input === params.input) {
        navigation.navigate('SignInput');
      } else {
        setInput('');
        Alert.alert('비밀번호가 틀렸습니다.', '', [
          {
            text: '뒤로 가기',
            onPress: () => navigation.navigate('PaySecretInput'),
          },
          {text: '다시 입력'},
        ]);
      }
    }
  }, [input]);

  return (
    <Wrapper $headerHeight={headerHeight}>
      <Container>
        <Info>비밀번호를 한 번 더 입력하세요.</Info>
        <SecretInput />
      </Container>
      <SecretKeyboard />
    </Wrapper>
  );
};

export default PaySecretConfirm;
