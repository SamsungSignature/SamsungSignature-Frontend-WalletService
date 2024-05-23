import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import imagePath from '../../../assets/imagePath';
import STYLES from '../../../constants/appStyles';
import {WalletStackParams} from '../../../routes/WalletNavigator';
import AppButton from '../../common/AppButton';
import {
  Info,
  MainImage,
  Page,
  PageView,
  Section,
  Title,
  TitleView,
  Wrapper,
} from './NoCards.style';

const NoCards = () => {
  const navigation = useNavigation<NavigationProp<WalletStackParams>>();
  const onPress = () => {
    navigation.navigate('WalletAdd');
  };

  return (
    <Wrapper>
      <MainImage source={imagePath.walletmain} resizeMode="contain" />
      <Section>
        <TitleView>
          <Title>빠른 실행 탭에 추가하고</Title>
          <Title>간편하게 사용하세요</Title>
        </TitleView>
        <Info>
          결제 카드에서 멤버십, 쿠폰, 디지털 자산까지 빠른 실행 탭에 추가하고
          간편하게 사용하세요.
        </Info>
        <AppButton
          text="추가"
          style={STYLES.BUTTONS.ADD_CARD}
          type="pressable"
          onPress={onPress}
        />
      </Section>
      <PageView>
        <Page $active />
        <Page />
      </PageView>
    </Wrapper>
  );
};

export default NoCards;
