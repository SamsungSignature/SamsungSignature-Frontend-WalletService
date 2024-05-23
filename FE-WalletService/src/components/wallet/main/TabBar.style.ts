import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';

interface TabBarStyleProps {
  $active?: boolean;
}

const screen = Dimensions.get('screen');

const Wrapper = styled.View`
  flex-direction: row;
  height: ${screen.height / 12}px;
  padding: 10px 16px;
`;

const TabView = styled.View`
  flex: 1;
  border-radius: ${theme.radii.circle};
  overflow: hidden;
`;

const TabButton = styled.Pressable`
  border-radius: ${theme.radii.circle};
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TabTextView = styled.View`
  position: absolute;
`;

const TabText = styled.Text<TabBarStyleProps>`
  color: ${({$active}) =>
    $active ? theme.colors.black : theme.colors.lightgray};
  font-size: 15px;
  font-weight: ${theme.fontWeights.semibold};
`;

const TabDecoration = styled.View<TabBarStyleProps>`
  position: absolute;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: ${({$active}) =>
    $active ? theme.colors.black : theme.colors.transparent};
  border-radius: ${theme.radii.circle};
`;

export {
  TabButton,
  TabDecoration,
  TabText,
  TabTextView,
  TabView,
  Wrapper,
  screen,
};
