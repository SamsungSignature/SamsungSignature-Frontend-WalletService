import styled from 'styled-components/native';
import {theme} from '../../assets/styles/theme.css';

interface CommonStyleProps {
  $headerHeight?: number;
  $flex?: number;
}

const Wrapper = styled.View<CommonStyleProps>`
  flex: 1;
  background: ${theme.colors.lightbackground};
  margin-top: ${({$headerHeight}) => ($headerHeight ? $headerHeight : 0)}px;
`;

const Container = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.white};
  border-radius: ${theme.radii.large};
  overflow: hidden;
`;

const BottomButtonView = styled.View`
  width: 100%;
  padding: ${theme.space[1]} ${theme.space[3]};
`;

const ButtonView = styled.View`
  border-radius: ${theme.radii.circle};
  overflow: hidden;
`;

const FlexBox = styled.View<CommonStyleProps>`
  flex: ${({$flex}) => ($flex ? $flex : 1)};
`;

export {BottomButtonView, ButtonView, Container, FlexBox, Wrapper};
