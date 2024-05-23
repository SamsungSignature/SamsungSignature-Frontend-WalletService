import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  padding: ${theme.space[2]} ${theme.space[4]};
  gap: 24px;
`;

const TimerView = styled.View`
  width: 36px;
  height: 24px;
  border-radius: ${theme.radii.circle};
  border-color: ${theme.colors.lightgray};
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;

const Time = styled.Text`
  color: ${theme.colors.white};
`;

const Info = styled.Text`
  color: ${theme.colors.white};
  text-align: center;
`;

const Guide = styled.Text`
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  text-decoration: underline;
`;

interface TimerProps {
  time: number;
  onEnd: () => void;
}

const Timer = ({time = 50, onEnd}: TimerProps) => {
  useEffect(() => {
    if (time === 0) {
      onEnd();
    }
  }, [time]);

  return (
    <Wrapper>
      <TimerView>
        <Time>{time}</Time>
      </TimerView>
      <Info>휴대전화의 뒷면을 카드 리더기 또는 NFC 리더기에 대세요.</Info>
      <Guide>가이드 보기</Guide>
    </Wrapper>
  );
};

export default Timer;
