import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import imagePath from '../../../assets/imagePath';
import {theme} from '../../../assets/styles/theme.css';
import AppButton from '../../../components/common/AppButton';
import STYLES from '../../../constants/appStyles';
import {WalletStackParams} from '../../../routes/WalletNavigator';
import {useAppSelector} from '../../../stores/hooks';
import {RootState} from '../../../stores/store';
import {BottomButtonView, Wrapper} from '../Common.style';

const StyledWrapper = styled(Wrapper)`
  background: ${theme.colors.background};
  align-items: center;
`;

const Logo = styled.Image`
  width: 98px;
  height: 17px;
  align-self: flex-end;
  margin: 24px;
`;

const Title = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[4]};
  font-weight: ${theme.fontWeights.bold};
  padding: 32px;
`;

const Image = styled.Image`
  width: 100%;
  height: 136px;
  margin: 7px;
`;

const Name = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
  padding: 6px;
`;

const Info = styled.Text`
  flex: 1;
`;

const AddCardConfirm = () => {
  const navigation = useNavigation<NavigationProp<WalletStackParams>>();
  const toNext = () => {
    navigation.navigate('WalletMain');
  };
  const {card_img, card_name} = useAppSelector(
    (state: RootState) => state.addCard.cardInfo,
  );

  return (
    <StyledWrapper>
      <Logo source={imagePath.paylogotext} resizeMode="contain" />
      <Title>카드 추가 완료</Title>
      <Image source={imagePath[card_img]} resizeMode="contain" />
      <Name>{card_name}</Name>
      <Info>카드 이미지는 실제 카드와 다를 수 있습니다.</Info>
      <BottomButtonView>
        <AppButton
          text="완료"
          style={STYLES.BUTTONS.TRANSPARENT}
          type="pressable"
          onPress={toNext}
        />
      </BottomButtonView>
    </StyledWrapper>
  );
};

export default AddCardConfirm;
