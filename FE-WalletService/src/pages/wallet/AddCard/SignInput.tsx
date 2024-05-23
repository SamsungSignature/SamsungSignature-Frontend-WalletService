import {useHeaderHeight} from '@react-navigation/elements';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import React, {useRef, useState} from 'react';
import SignatureCapture from 'react-native-signature-capture';
import useGetCards from '../../../api/wallet/useGetCards';
import usePostCard from '../../../api/wallet/usePostCard';
import AppButton from '../../../components/common/AppButton';
import STYLES from '../../../constants/appStyles';
import {AddCardStackParams} from '../../../routes/WalletAdd/AddCardNavigator';
import {BottomButtonView, ButtonView, FlexBox} from '../Common.style';
import {
  Info,
  RetryView,
  SignatureBox,
  SignatureView,
  StyledSignature,
  StyledWrapper,
} from './SignInput.style';

const SignInput = () => {
  const headerHeight = useHeaderHeight();
  const [isSign, setIsSign] = useState(false);

  // 서명 다시하기
  const onTouchStart = () => {
    setIsSign(true);
  };
  const signatureRef = useRef<SignatureCapture>(null);
  const handleClear = () => {
    signatureRef.current?.resetImage();
    setIsSign(false);
  };

  // 네비게이션, API
  const navigation = useNavigation<NavigationProp<AddCardStackParams>>();
  const postCard = usePostCard();
  const getCards = useGetCards();
  const {mutate} = useMutation({
    mutationFn: postCard,
    onSuccess: () => {
      getCards();
      navigation.navigate('AddCardConfirm');
    },
    onError: err => {
      console.log(err.message);
    },
  });
  const toNext = () => {
    if (isSign) {
      mutate();
    }
  };

  return (
    <StyledWrapper $headerHeight={headerHeight}>
      <Info>아래에 서명하세요.</Info>
      <Info>
        결제할 때 카드 소유자인지 확인하기 위해 서명을 요구할 수 있습니다.
      </Info>
      <FlexBox $flex={4} />
      <SignatureBox>
        <SignatureView>
          <StyledSignature
            ref={signatureRef}
            showNativeButtons={false}
            onTouchStart={onTouchStart}
          />
        </SignatureView>
        {isSign && (
          <RetryView>
            <ButtonView>
              <AppButton
                text="다시 시도"
                style={STYLES.BUTTONS.GRAY_SAMLL}
                type="pressable"
                onPress={handleClear}
              />
            </ButtonView>
          </RetryView>
        )}
      </SignatureBox>
      <FlexBox $flex={10} />
      <BottomButtonView>
        <AppButton
          text="다음"
          style={STYLES.BUTTONS.TRANSPARENT}
          type="pressable"
          onPress={toNext}
          disabled={!isSign}
        />
      </BottomButtonView>
    </StyledWrapper>
  );
};

export default SignInput;
