import {RouteProp, useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import React, {useContext, useEffect, useState} from 'react';
import {Linking, Text, ToastAndroid} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import styled from 'styled-components/native';
import useGetPayables, {
  GetPayablesRequestParams,
} from '../../api/wallet/useGetPayables';
import {theme} from '../../assets/styles/theme.css';
import Loading from '../../components/common/Loading';
import Auth from '../../components/wallet/main/Auth';
import {RnBiometricsContext} from '../../context/RnBiometricsContext';
import decodeData from '../../functions/decodeData';
import encodeData from '../../functions/encodeData';
import useCards from '../../hooks/useCards';
import {WalletStackParams} from '../../routes/WalletNavigator';
import {FlexBox} from './Common.style';
import {Card} from './WalletMain';

const Wrapper = styled.View`
  flex: 1;
  background: ${theme.colors.lightbackground};
  align-items: center;
  justify-content: center;
  padding: ${theme.space[4]} 0 ${theme.space[5]} 0;
`;

const Title = styled.Text`
  width: 100%;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[4]};
  font-weight: ${theme.fontWeights.semibold};
  padding-left: ${theme.space[4]};
`;

const SelectCard = () => {
  const {params} = useRoute<RouteProp<WalletStackParams, 'SelectCard'>>();
  const [cards, setCards] = useState<Card[]>([]);
  const [card, CardContainer] = useCards(cards);
  const decodedData = decodeData<LinkData>(params.data);
  const originData = encodeData(decodedData.originData);

  // 카드 로딩
  const getPayables = useGetPayables();
  const pushNotificationParams = () => {
    let getPayablesParams: GetPayablesRequestParams = {
      signature_detail_id: undefined,
    };
    if (decodedData.originData.signature_detail_id) {
      getPayablesParams = {
        signature_detail_id: decodedData.originData.signature_detail_id,
      };
    }

    return getPayablesParams;
  };
  const {isLoading, isSuccess, isError, error, data} = useQuery({
    queryKey: ['getPayables'],
    queryFn: () => getPayables(pushNotificationParams()),
  });
  useEffect(() => {
    if (isSuccess) {
      setCards(data.data.body.cards);
    } else if (isError) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  }, [isSuccess]);

  // 지문인식, 기존 앱으로 복귀
  const rnBiometrics = useContext(RnBiometricsContext)?.current;
  const handleBiometric = async () => {
    await rnBiometrics
      ?.simplePrompt({promptMessage: '지문 인식'})
      .then(async res => {
        if (res.success) {
          const encodedData = encodeData(card);
          const url = `${decodedData.origin}://${decodedData.route}?data=${encodedData}&originData=${originData}`;
          await Linking.openURL(url);
        }
      })
      .finally(() => {
        RNExitApp.exitApp();
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Title>카드 선택</Title>
      <FlexBox $flex={2} />
      {isError ? <Text>카드 로딩 에러</Text> : <CardContainer />}
      <Auth onPress={handleBiometric} />
    </Wrapper>
  );
};

export default SelectCard;
