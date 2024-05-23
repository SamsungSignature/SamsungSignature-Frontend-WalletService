import {useHeaderHeight} from '@react-navigation/elements';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Text, TextInput} from 'react-native';
import {useCameraDevice, useCameraPermission} from 'react-native-vision-camera';
import styled from 'styled-components/native';
import {PostCardRequestData} from '../../../api/wallet/usePostCard';
import AppButton from '../../../components/common/AppButton';
import CaptureCard from '../../../components/wallet/add/CaptureCard';
import CardNums from '../../../components/wallet/add/CardNums';
import Expiration from '../../../components/wallet/add/Expiration';
import OwnerName from '../../../components/wallet/add/OwnerName';
import SecurityCode from '../../../components/wallet/add/SecurityCode';
import STYLES from '../../../constants/appStyles';
import {AddCardStackParams} from '../../../routes/WalletAdd/AddCardNavigator';
import {useAppDispatch} from '../../../stores/hooks';
import {setCardInfo} from '../../../stores/slices/addCard';
import {BottomButtonView, Container, Wrapper} from '../Common.style';

const InputsBox = styled.View`
  padding: 24px;
  gap: 48px;
`;

interface CardInfo extends PostCardRequestData {
  owner_name?: string;
}

const CardInputs = () => {
  const [inputs, setInputs] = useState<CardInfo>({
    card_num: '',
    card_expiration_date: '',
    card_cvc: '',
    card_name: '',
    card_company: '',
    card_img: '',
    owner_name: '',
  });
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation<NavigationProp<AddCardStackParams>>();
  const dispatch = useAppDispatch();

  // 카메라
  const [cameraOn, setCameraOn] = useState(false);
  useEffect(() => {
    if (!hasPermission || !device) {
      return;
    }
    setCameraOn(true);
  }, []);
  useEffect(() => {
    if (cameraOn) {
      navigation.setOptions({headerShown: false});
    } else {
      navigation.setOptions({headerShown: true});
    }
  }, [cameraOn]);

  // 자동 넘기기
  const cardNumsRef = useRef<TextInput>(null);
  const expirationRef = useRef<TextInput>(null);
  const securityCodeRef = useRef<TextInput>(null);
  useEffect(() => {
    if (!cameraOn) {
      cardNumsRef.current?.focus();
    }
  }, [cameraOn]);
  useEffect(() => {
    if (inputs.card_num.length === 16) {
      expirationRef.current?.focus();
    }
  }, [inputs.card_num]);
  useEffect(() => {
    if (inputs.card_expiration_date.length === 4) {
      securityCodeRef.current?.focus();
    }
  }, [inputs.card_expiration_date]);

  // 카메라가 없을 경우
  if (!hasPermission) {
    return <Text>권한 없음</Text>;
  }
  if (!device) {
    return <Text>카메라 없음</Text>;
  }

  // 버튼 상호작용
  const disabled = () =>
    inputs.card_num.length !== 16 ||
    inputs.card_expiration_date.length !== 4 ||
    inputs.card_cvc.length !== 3;
  const toNext = () => {
    const cardInfo: CardInfo = {
      ...inputs,
      card_name: inputs.owner_name
        ? inputs.owner_name + '님의 ' + inputs.card_name
        : inputs.card_name,
    };
    if (disabled()) {
      return;
    }
    dispatch(setCardInfo(cardInfo));
    navigation.navigate('AddCardTerms');
  };

  return (
    <Wrapper $headerHeight={headerHeight}>
      {cameraOn ? (
        <CaptureCard
          device={device}
          isActive={cameraOn}
          setCameraOn={setCameraOn}
        />
      ) : (
        <>
          <Container>
            <InputsBox>
              <CardNums
                reference={cardNumsRef}
                setInputs={setInputs}
                setCameraOn={setCameraOn}
              />
              <Expiration
                reference={expirationRef}
                inputs={inputs}
                setInputs={setInputs}
              />
              <OwnerName setInputs={setInputs} />
              <SecurityCode
                reference={securityCodeRef}
                inputs={inputs}
                setInputs={setInputs}
              />
            </InputsBox>
          </Container>
          <BottomButtonView>
            <AppButton
              text="다음"
              onPress={toNext}
              style={STYLES.BUTTONS.TRANSPARENT}
              type="pressable"
              disabled={disabled()}
            />
          </BottomButtonView>
        </>
      )}
    </Wrapper>
  );
};

export type {CardInfo};
export default CardInputs;
