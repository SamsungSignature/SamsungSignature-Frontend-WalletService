import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

interface AppHeaderStyleProps {
  $backgroundColor?: string;
}

const screen = Dimensions.get('screen');

const Wrapper = styled.View<AppHeaderStyleProps>`
  flex-direction: row;
  width: ${screen.width}px;
  height: ${screen.height / 9}px;
  padding: 0 8px;
  background: ${({$backgroundColor}) => $backgroundColor};
  align-items: center;
`;

const LeftView = styled.View``;

const TitleView = styled.View`
  flex: 1;
`;

const RightView = styled.View``;

const Title = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

export {LeftView, RightView, Title, TitleView, Wrapper};
