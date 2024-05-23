import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {TextInput} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import iconPath from '../../../assets/iconPath';
import {theme} from '../../../assets/styles/theme.css';
import STYLES from '../../../constants/appStyles';
import {CardInfo} from '../../../pages/wallet/AddCard/CardInputs';
import AppInput from '../../common/AppInput';
import {Title} from './Common.style';
import {IconView, InputView, TitleView, Wrapper} from './SecurityCode.style';

interface SecurityCodeProps {
  reference: RefObject<TextInput>;
  inputs: CardInfo;
  setInputs: Dispatch<SetStateAction<CardInfo>>;
}

const SecurityCode = ({reference, inputs, setInputs}: SecurityCodeProps) => {
  // 입력
  const [card_cvc, setCardCvc] = useState('');
  useEffect(() => {
    setInputs(prev => ({...prev, card_cvc}));
  }, [card_cvc]);

  // 초기화
  useEffect(() => {
    if (inputs.card_cvc === '') {
      setCardCvc('');
    }
  }, [inputs.card_cvc]);

  return (
    <Wrapper>
      <TitleView>
        <Title>보안코드(CVC/CVV) </Title>
        <IconView>
          <WithLocalSvg
            width={16}
            height={16}
            asset={iconPath.question}
            fill={theme.colors.lightergray}
          />
        </IconView>
      </TitleView>
      <InputView>
        <AppInput
          reference={reference}
          value={card_cvc}
          setValue={setCardCvc}
          style={STYLES.INPUTS.GENERAL}
          keyboardType="numeric"
          textAlign="center"
          maxLength={3}
          secureTextEntry
          offIcon
        />
      </InputView>
    </Wrapper>
  );
};

export default SecurityCode;
