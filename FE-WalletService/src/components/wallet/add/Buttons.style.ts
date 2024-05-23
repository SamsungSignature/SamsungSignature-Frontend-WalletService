import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';

interface ButtonsStyleProps {
  $flex?: number;
  $bottom?: boolean;
}

const Wrapper = styled.View`
  position: relative;
  z-index: 3;
  flex: 1;
`;

const FlexView = styled.View<ButtonsStyleProps>`
  flex: ${({$flex}) => $flex};
  align-items: center;
  justify-content: ${({$bottom}) => ($bottom ? 'start' : 'center')};
  gap: ${({$bottom}) => ($bottom ? '48px' : '0px')};
  padding: ${theme.space[2]};
`;

const BackbuttonView = styled.View`
  position: absolute;
  z-index: 99;
  top: 5%;
  left: 3%;
  border-radius: ${theme.radii.circle};
  overflow: hidden;
  opacity: 0.7;
`;

const Backbutton = styled.Pressable`
  border-radius: ${theme.radii.circle};
  padding: ${theme.space[1]};
`;

const Info = styled.Text<ButtonsStyleProps>`
  color: ${theme.colors.black};
`;

const ButtonBox = styled.View`
  border-radius: ${theme.radii.circle};
  overflow: hidden;
`;

const ButtonView = styled.Pressable`
  background-color: ${theme.colors.gray};
  opacity: 0.75;
  border-radius: ${theme.radii.circle};
  padding: 8px 32px;
`;

const ButtonText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[2]};
  font-weight: ${theme.fontWeights.bold};
`;

const IconView = styled.Pressable`
  background-color: ${theme.colors.gray};
  opacity: 0.75;
  border-radius: ${theme.radii.circle};
  padding: 12px;
`;

export {
  Backbutton,
  BackbuttonView,
  ButtonBox,
  ButtonText,
  ButtonView,
  FlexView,
  IconView,
  Info,
  Wrapper,
};
