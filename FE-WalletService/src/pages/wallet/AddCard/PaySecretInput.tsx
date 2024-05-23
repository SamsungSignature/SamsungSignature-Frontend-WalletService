import {useHeaderHeight} from '@react-navigation/elements';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import useSecretInput from '../../../hooks/useSecretInput';
import {AddCardStackParams} from '../../../routes/WalletAdd/AddCardNavigator';
import {useAppSelector} from '../../../stores/hooks';
import {RootState} from '../../../stores/store';
import {Wrapper} from '../Common.style';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Info = styled.Text``;

const PaySecretInput = () => {
  const headerHeight = useHeaderHeight();
  const cardCompany = useAppSelector(
    (state: RootState) => state.addCard.cardInfo.card_company,
  );
  const [input, _, SecretInput, SecretKeyboard] = useSecretInput(6);

  // 네비게이션
  const navigation = useNavigation<NavigationProp<AddCardStackParams>>();
  useEffect(() => {
    if (input.length === 6) {
      navigation.navigate('PaySecretConfirm', {input});
    }
  }, [input]);

  return (
    <Wrapper $headerHeight={headerHeight}>
      <Container>
        <Info>{cardCompany}카드에 사용할 결제 비밀번호를 등록하세요.</Info>
        <SecretInput />
      </Container>
      <SecretKeyboard />
    </Wrapper>
  );
};

export default PaySecretInput;
