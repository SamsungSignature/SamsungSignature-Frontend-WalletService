import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

interface UseCardsStyleProps {
  $isLeft?: boolean;
}

const screen = Dimensions.get('screen');

const Wrapper = styled.View`
  width: ${screen.width}px;
  height: ${screen.width * 0.6}px;
`;

const AfterPrevImage = styled(Animated.Image)`
  position: absolute;
  top: 7%;
  width: 82%;
  height: 90%;
  align-self: center;
  transform: ${`translateX(-${screen.width}px)`} scale(0.8);
  opacity: 0;
`;

const PrevImage = styled(Animated.Image)`
  position: absolute;
  top: 7%;
  width: 82%;
  height: 90%;
  align-self: center;
  transform: ${`translateX(-${screen.width}px)`} scale(0.8);
  opacity: 0.3;
`;

const CardImage = styled(Animated.Image)`
  position: absolute;
  top: 7%;
  width: 82%;
  height: 90%;
  align-self: center;
`;

const NextImage = styled(Animated.Image)<UseCardsStyleProps>`
  position: absolute;
  top: 7%;
  width: 82%;
  height: 90%;
  align-self: center;
  transform: ${({$isLeft}) =>
    $isLeft ? 'translateY(-6px)' : 'translateY(-12px)'};
  opacity: 0.9;
`;

const AfterNextImage = styled(Animated.Image)`
  position: absolute;
  top: 7%;
  width: 82%;
  height: 90%;
  align-self: center;
  transform: translateY(-12px);
  opacity: 0.9;
`;

const LastImage = styled(Animated.Image)`
  position: absolute;
  top: 7%;
  width: 82%;
  height: 90%;
  align-self: center;
  transform: translateY(-12px);
  opacity: 0;
`;

export {
  AfterNextImage,
  AfterPrevImage,
  CardImage,
  LastImage,
  NextImage,
  PrevImage,
  Wrapper,
};
