import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {Dispatch, SetStateAction} from 'react';
import {Alert} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import iconPath from '../../../assets/iconPath';
import {theme} from '../../../assets/styles/theme.css';
import {AddCardStackParams} from '../../../routes/WalletAdd/AddCardNavigator';
import {
  Backbutton,
  BackbuttonView,
  ButtonBox,
  ButtonText,
  ButtonView,
  FlexView,
  IconView,
  Info,
  Wrapper,
} from './Buttons.style';

interface ButtonsProps {
  flex: {
    top: number;
    center: number;
    bottom: number;
  };
  setCameraOn: Dispatch<SetStateAction<boolean>>;
}

const Buttons = ({flex, setCameraOn}: ButtonsProps) => {
  // 네비게이션
  const navigation = useNavigation<NavigationProp<AddCardStackParams>>();
  const toBack = () => {
    navigation.goBack();
  };
  const toDirect = () => {
    setCameraOn(false);
  };
  const noService = () => {
    Alert.alert('서비스하지 않는 기능입니다.', '수동으로 입력해주세요.');
  };

  // 색상
  const onPressed = ({pressed}: {pressed: boolean}) => ({
    backgroundColor: pressed ? theme.colors.gray : theme.colors.transparent,
  });
  const onButtonPressed = ({pressed}: {pressed: boolean}) => ({
    backgroundColor: pressed ? theme.colors.darkgray : theme.colors.gray,
  });

  return (
    <Wrapper>
      <BackbuttonView>
        <Backbutton
          onPress={toBack}
          style={onPressed}
          android_ripple={{color: theme.colors.lightgray}}>
          <WithLocalSvg
            asset={iconPath.chevron}
            stroke={theme.colors.darkgray}
          />
        </Backbutton>
      </BackbuttonView>
      <FlexView $flex={flex.top}>
        <Info>신용카드와 체크카드를 지원합니다.</Info>
      </FlexView>
      <FlexView $flex={flex.center} />
      <FlexView $flex={flex.bottom} $bottom>
        <Info $bottom>사각형 안에 카드를 맞추세요.</Info>
        <ButtonBox>
          <ButtonView
            onPress={toDirect}
            style={onButtonPressed}
            android_ripple={{color: theme.colors.walletGray}}>
            <ButtonText>수동으로 카드 입력</ButtonText>
          </ButtonView>
        </ButtonBox>
        <ButtonBox>
          <IconView
            onPress={noService}
            style={onButtonPressed}
            android_ripple={{color: theme.colors.walletGray}}>
            <WithLocalSvg asset={iconPath.flashlight} />
          </IconView>
        </ButtonBox>
      </FlexView>
    </Wrapper>
  );
};

export default Buttons;
