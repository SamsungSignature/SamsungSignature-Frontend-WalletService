import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import STYLES from '../../../constants/appStyles';
import {CardInfo} from '../../../pages/wallet/AddCard/CardInputs';
import AppInput from '../../common/AppInput';
import {Container, Title, Wrapper} from './Common.style';

const InputView = styled.View`
  width: 56px;
`;

const Slash = styled.Text`
  font-size: 20px;
`;

interface ExpirationProps {
  reference: RefObject<TextInput>;
  inputs: CardInfo;
  setInputs: Dispatch<SetStateAction<CardInfo>>;
}

const Expiration = ({reference, inputs, setInputs}: ExpirationProps) => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // 자동 넘기기
  const yearRef = useRef<TextInput>(null);
  useEffect(() => {
    if (month.length === 2) {
      setYear('');
      yearRef.current?.focus();
    }
  }, [month]);

  // 입력
  useEffect(() => {
    const card_expiration_date = month + year;
    setInputs(prev => ({...prev, card_expiration_date}));
  }, [month, year]);

  // 초기화
  useEffect(() => {
    if (inputs.card_expiration_date === '') {
      setMonth('');
      setYear('');
    }
  }, [inputs]);

  return (
    <Wrapper>
      <Title>만료일</Title>
      <Container>
        <InputView>
          <AppInput
            reference={reference}
            value={month}
            setValue={setMonth}
            style={STYLES.INPUTS.GENERAL}
            placeholder="MM"
            textAlign="center"
            keyboardType="numeric"
            maxLength={2}
            onFocus={() => setMonth('')}
          />
        </InputView>
        <Slash>/</Slash>
        <InputView>
          <AppInput
            reference={yearRef}
            value={year}
            setValue={setYear}
            style={STYLES.INPUTS.GENERAL}
            placeholder="YY"
            textAlign="center"
            keyboardType="numeric"
            maxLength={2}
            onFocus={() => setYear('')}
          />
        </InputView>
      </Container>
    </Wrapper>
  );
};

export default Expiration;
