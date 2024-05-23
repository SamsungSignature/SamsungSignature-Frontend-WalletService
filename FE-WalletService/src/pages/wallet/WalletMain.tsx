import {useHeaderHeight} from '@react-navigation/elements';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import useGetCards from '../../api/wallet/useGetCards';
import {theme} from '../../assets/styles/theme.css';
import AppHeaderRight from '../../components/common/appHeader/AppHeaderRight';
import Cards from '../../components/wallet/main/Cards';
import NoCards from '../../components/wallet/main/NoCards';
import TabBar from '../../components/wallet/main/TabBar';
import {WalletStackParams} from '../../routes/WalletNavigator';
import {useAppSelector} from '../../stores/hooks';
import {RootState} from '../../stores/store';
import {Wrapper} from './Common.style';

interface Card {
  card_id: number;
  card_name: string;
  card_company: string;
  card_img: string;
}

const StyledWrapper = styled(Wrapper)`
  background: ${theme.colors.background};
`;

const WalletMain = () => {
  const headerHeight = useHeaderHeight();

  // 카드 불러오기
  const cards = useAppSelector((state: RootState) => state.addCard.cards);
  const getCards = useGetCards();
  useEffect(() => {
    getCards();
  }, []);

  // 헤더 변경
  const noService = () => {
    Alert.alert('지원하지 않는 기능입니다.');
  };
  const add = () => navigation.navigate('WalletAdd');
  const more = [
    {title: '빠른 실행 편집', onPress: noService},
    {title: '나를 위한 추천', onPress: noService},
  ];
  const navigation = useNavigation<NavigationProp<WalletStackParams>>();
  useEffect(() => {
    if (cards.length !== 0) {
      navigation.setOptions({headerRight: () => AppHeaderRight({add, more})});
    } else {
      navigation.setOptions({headerRight: undefined});
    }
  }, [cards]);

  return (
    <StyledWrapper $headerHeight={headerHeight}>
      {cards.length === 0 ? <NoCards /> : <Cards cards={cards} />}
      <TabBar />
    </StyledWrapper>
  );
};

export type {Card};
export default WalletMain;
