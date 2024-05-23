import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {Linking, ToastAndroid} from 'react-native';
import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager';
import usePayment, {PaymentRequestData} from '../../api/wallet/usePayment';
import imagePath from '../../assets/imagePath';
import PaymentLottie from '../../assets/lotties/Payment.json';
import QuickMenu from '../../components/wallet/payment/QuickMenu';
import Timer from '../../components/wallet/payment/Timer';
import decodeData from '../../functions/decodeData';
import encodeData from '../../functions/encodeData';
import {WalletStackParams} from '../../routes/WalletNavigator';
import {CardImage, CardView, Lottie, Wrapper} from './Payment.style';
import {Card} from './WalletMain';

interface PaymentInfo {
  payment_info: {
    price: number;
    market_name: string;
  };
}

const Payment = () => {
  const {data, card} =
    useRoute<RouteProp<WalletStackParams, 'Payment'>>().params;
  const decodedData = data ? decodeData<LinkData>(data) : undefined;
  const decodedCard = decodeData<Card>(card);

  // 시간
  const [time, setTime] = useState(50);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevCount => prevCount - 1);
    }, 1000);
    if (time === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [time]);

  // 네비게이션
  const navigation = useNavigation<NavigationProp<WalletStackParams>>();
  const onEnd = (message?: string) => {
    if (message) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
    if (data) {
      const originData = decodedData?.originData;
      const encodedOriginData = originData
        ? encodeData(originData)
        : encodeData({});
      const url = `${decodedData?.origin}://${decodedData?.route}?data=${encodedOriginData}`;
      Linking.openURL(url);
    } else {
      navigation.navigate('WalletMain');
    }
  };

  // NFC
  async function readNdef() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      if (tag?.ndefMessage && tag.ndefMessage.length > 0) {
        const nfcData = tag.ndefMessage[0].payload as any;
        return Ndef.text.decodePayload(nfcData);
      }
    } catch (err: any) {
      if (err?.message) {
        ToastAndroid.show(err.message, ToastAndroid.SHORT);
      }
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  // 결제
  const payment = usePayment();
  const {mutate} = useMutation({
    mutationKey: ['payment'],
    mutationFn: payment,
    onSuccess: res => {
      onEnd(res.data.message);
    },
    onError: err => {
      console.log('err:', err, 'message:', err.message);

      onEnd(err.message);
    },
    onSettled: () => {
      NfcManager.cancelTechnologyRequest();
    },
  });
  useEffect(() => {
    readNdef().then(payload => {
      if (!payload) {
        throw new Error('NFC 읽기 실패');
      }
      const payment_info = JSON.parse(payload) as PaymentInfo;
      const paymentData: PaymentRequestData = {
        card_id: decodedCard.card_id,
        ...payment_info,
      };
      mutate(paymentData);
    });
  }, []);

  return (
    <Wrapper>
      <Lottie source={PaymentLottie} resizeMode="contain" autoPlay loop />
      <QuickMenu />
      <CardView>
        <CardImage
          source={imagePath[decodedCard.card_img]}
          resizeMode="contain"
        />
      </CardView>
      <Timer time={time} onEnd={onEnd} />
    </Wrapper>
  );
};

export default Payment;
