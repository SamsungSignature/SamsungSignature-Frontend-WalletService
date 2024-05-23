import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert} from 'react-native';
import imagePath from '../../../assets/imagePath';
import {theme} from '../../../assets/styles/theme.css';
import {Menu as MenuType} from '../../../constants/menus';
import {WalletStackParams} from '../../../routes/WalletNavigator';
import {
  Container,
  Icon,
  IconView,
  Info,
  Title,
  TitleView,
  Wrapper,
} from './Menu.style';

interface MenuProps {
  menu: MenuType;
  isLast: boolean;
}

const Menu = ({menu, isLast}: MenuProps) => {
  const {icon, title, info, link} = menu;

  const navigation = useNavigation<NavigationProp<WalletStackParams>>();
  const onPress = () => {
    if (link) {
      navigation.navigate(link);
    } else {
      Alert.alert('지원하지 않는 서비스입니다.', '카드 추가를 눌러주세요.');
    }
  };
  const onPressed = ({pressed}: {pressed: boolean}) => ({
    backgroundColor: pressed ? theme.colors.lightergray : 'transparent',
  });

  return (
    <Wrapper
      onPress={onPress}
      style={onPressed}
      android_ripple={{color: theme.colors.walletGray}}>
      <Container>
        {icon && (
          <IconView>
            <Icon source={imagePath[icon]} />
          </IconView>
        )}
        <TitleView $isLast={isLast} $isIcon={!!icon}>
          <Title>{title}</Title>
          {info && <Info>{info}</Info>}
        </TitleView>
      </Container>
    </Wrapper>
  );
};

export default Menu;
