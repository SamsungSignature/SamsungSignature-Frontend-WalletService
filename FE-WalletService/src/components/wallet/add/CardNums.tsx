import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {TextInput} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import iconPath from '../../../assets/iconPath';
import {theme} from '../../../assets/styles/theme.css';
import STYLES from '../../../constants/appStyles';
import cardBin from '../../../functions/card/cardBin';
import {CardInfo} from '../../../pages/wallet/AddCard/CardInputs';
import AppInput from '../../common/AppInput';
import {IconButton, IconView, InputView} from './CardNums.style';
import {Container, Title, Wrapper} from './Common.style';

interface CardNumsProps {
  reference: RefObject<TextInput>;
  setInputs: Dispatch<SetStateAction<CardInfo>>;
  setCameraOn: Dispatch<SetStateAction<boolean>>;
}

const CardNums = ({reference, setInputs, setCameraOn}: CardNumsProps) => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');

  // 자동 넘기기
  const secondRef = useRef<TextInput>(null);
  const thirdRef = useRef<TextInput>(null);
  const fourthRef = useRef<TextInput>(null);
  useEffect(() => {
    if (first.length === 4) {
      secondRef.current?.focus();
    }
  }, [first]);
  useEffect(() => {
    if (second.length === 4) {
      setThird('');
      thirdRef.current?.focus();
    }
  }, [second]);
  useEffect(() => {
    if (third.length === 4) {
      setFourth('');
      fourthRef.current?.focus();
    }
  }, [third]);

  // 카드사 확인
  useEffect(() => {
    if (first.length === 4 && second.length === 4) {
      setInputs(cardBin(first + second));
      setThird('');
      setFourth('');
      thirdRef.current?.focus();
    }
  }, [first, second]);

  // 입력
  useEffect(() => {
    const card_num = first + second + third + fourth;
    setInputs(prev => ({...prev, card_num}));
  }, [first, second, third, fourth]);

  // 카메라 켜기
  const handleCameraOn = () => {
    setCameraOn(true);
  };
  const onPressed = ({pressed}: {pressed: boolean}) => ({
    backgroundColor: pressed
      ? theme.colors.lightgray
      : theme.colors.lightergray,
  });

  return (
    <Wrapper>
      <Title>카드 번호</Title>
      <Container>
        <IconView>
          <IconButton
            onPress={handleCameraOn}
            style={onPressed}
            android_ripple={{color: theme.colors.gray}}>
            <WithLocalSvg asset={iconPath.camerasquare} />
          </IconButton>
        </IconView>
        <InputView>
          <AppInput
            reference={reference}
            value={first}
            setValue={setFirst}
            style={STYLES.INPUTS.GENERAL}
            textAlign="center"
            keyboardType="numeric"
            maxLength={4}
          />
        </InputView>
        <InputView>
          <AppInput
            reference={secondRef}
            value={second}
            setValue={setSecond}
            style={STYLES.INPUTS.GENERAL}
            textAlign="center"
            keyboardType="numeric"
            maxLength={4}
          />
        </InputView>
        <InputView>
          <AppInput
            reference={thirdRef}
            value={third}
            setValue={setThird}
            style={STYLES.INPUTS.GENERAL}
            textAlign="center"
            keyboardType="numeric"
            onFocus={() => setThird('')}
            maxLength={4}
            secureTextEntry
            offIcon
            showSoftInputOnFocus={false}
          />
        </InputView>
        <InputView>
          <AppInput
            reference={fourthRef}
            value={fourth}
            setValue={setFourth}
            style={STYLES.INPUTS.GENERAL}
            textAlign="center"
            keyboardType="numeric"
            onFocus={() => setFourth('')}
            maxLength={4}
            secureTextEntry
            offIcon
            showSoftInputOnFocus={false}
          />
        </InputView>
      </Container>
    </Wrapper>
  );
};

export default CardNums;
