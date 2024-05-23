import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';
import {RnBiometricsContext} from '../../../context/RnBiometricsContext';
import encodeData from '../../../functions/encodeData';
import useCards from '../../../hooks/useCards';
import {Card} from '../../../pages/wallet/WalletMain';
import {WalletStackParams} from '../../../routes/WalletNavigator';
import Auth from './Auth';
import QuickMenu from './QuickMenu';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

interface CardsProps {
  cards: Card[];
}

const Cards = ({cards}: CardsProps) => {
  const [card, CardContainer] = useCards(cards);

  // 지문 인식
  const navigation = useNavigation<NavigationProp<WalletStackParams>>();
  const rnBiometrics = useContext(RnBiometricsContext)?.current;
  const onPress = () => {
    rnBiometrics?.simplePrompt({promptMessage: '지문 인식'}).then(result => {
      if (result.success) {
        navigation.navigate('Payment', {card: encodeData(card)});
      }
    });
  };

  return (
    <Wrapper>
      <QuickMenu />
      <CardContainer />
      <Auth onPress={onPress} />
    </Wrapper>
  );
};

export default Cards;
