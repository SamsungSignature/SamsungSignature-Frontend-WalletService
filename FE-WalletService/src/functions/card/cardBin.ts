import {Alert} from 'react-native';
import {CardInfo} from '../../pages/wallet/AddCard/CardInputs';

const cardBin = (bin: string) => {
  let result: CardInfo = {
    card_num: '',
    card_expiration_date: '',
    card_cvc: '',
    card_name: '',
    card_company: '',
    card_img: '',
  };

  if (bin.length !== 8) {
    Alert.alert('카드 번호 오류');
    return result;
  }

  if (bin === '49022082') {
    result.card_num = bin;
    result.card_company = '비씨';
    result.card_name = '카드의 정석 POINT';
    result.card_img = 'bcwooricredit';
    return result;
  } else if (bin === '54802058') {
    result.card_num = bin;
    result.card_company = '비씨';
    result.card_name = '카드의 정석 POINT CHECK';
    result.card_img = 'bcwooricheck';
    return result;
  } else {
    result.card_num = bin;
    result.card_company = '신한';
    result.card_name = 'Deep Making 카드';
    result.card_img = 'defaultcard';
    return result;
  }
};

export default cardBin;
