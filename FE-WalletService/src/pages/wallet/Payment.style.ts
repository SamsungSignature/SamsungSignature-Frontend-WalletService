import LottieView from 'lottie-react-native';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../assets/styles/theme.css';

const screen = Dimensions.get('screen');

const Wrapper = styled.View`
  flex: 1;
  background: ${theme.colors.black};
`;

const CardView = styled.View`
  width: 100%;
  height: ${screen.width * 0.9}px;
  align-items: center;
  justify-content: center;
`;

const CardImage = styled.Image`
  width: ${screen.width * 0.9}px;
  height: ${screen.width * 0.57}px;
  align-self: center;
  border-radius: 10px 10px 0 0;
  transform: rotate(90deg);
`;

const Lottie = styled(LottieView)`
  position: absolute;
  width: ${screen.width}px;
  height: ${screen.width}px;
`;

export {CardImage, CardView, Lottie, Wrapper};
