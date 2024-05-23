import React, {Dispatch, ReactNode, SetStateAction, useState} from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import iconPath from '../assets/iconPath';
import {theme} from '../assets/styles/theme.css';
import groupByRow from '../functions/groupByRow';
import shuffleArray from '../functions/shuffleArray';
import {
  AddonBox,
  AddonView,
  Dot,
  Info,
  InfoView,
  Num,
  NumRow,
  NumView,
  NumsView,
  SecretInputWrapper,
  SecretKeyboardWrapper,
  ShieldIconView,
} from './useSecretInput.style';

const useSecretInput = (
  length: number,
): [
  string,
  Dispatch<SetStateAction<string>>,
  () => ReactNode,
  () => ReactNode,
] => {
  const [input, setInput] = useState('');

  const SecretInput = () => {
    return (
      <SecretInputWrapper>
        {Array.from({length}, (_, idx) => (
          <Dot key={idx} $active={input.length > idx} />
        ))}
      </SecretInputWrapper>
    );
  };

  const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', ' '];
  const [nums, setNums] = useState(groupByRow(shuffleArray(keys), 4));
  const handleInput = (num: string) => {
    if (num !== ' ' && input.length < 6) {
      setInput(prev => prev + num);
    }
  };
  const handleShuffle = () => {
    setNums(groupByRow(shuffleArray(keys), 4));
  };
  const handleBackspace = () => {
    setInput(prev => prev.slice(0, -1));
  };
  const onPressed = ({pressed}: {pressed: boolean}) => ({
    backgroundColor: pressed
      ? theme.colors.darkerblue
      : theme.colors.transparent,
  });
  const SecretKeyboard = () => {
    return (
      <SecretKeyboardWrapper>
        <InfoView>
          <ShieldIconView>
            <WithLocalSvg asset={iconPath.shield} />
          </ShieldIconView>
          <Info>보안모드</Info>
        </InfoView>
        <NumsView>
          {nums?.map((numRow, idx) => (
            <NumRow key={idx}>
              {numRow?.map((num, index) => (
                <NumView
                  key={index}
                  onPress={() => handleInput(num)}
                  style={onPressed}>
                  <Num>{num}</Num>
                </NumView>
              ))}
            </NumRow>
          ))}
        </NumsView>
        <AddonBox>
          <AddonView onPress={handleShuffle}>
            <WithLocalSvg asset={iconPath.shuffle} />
          </AddonView>
          <AddonView onPress={handleBackspace}>
            <WithLocalSvg asset={iconPath.backspace} />
          </AddonView>
        </AddonBox>
      </SecretKeyboardWrapper>
    );
  };

  return [input, setInput, SecretInput, SecretKeyboard];
};

export default useSecretInput;
