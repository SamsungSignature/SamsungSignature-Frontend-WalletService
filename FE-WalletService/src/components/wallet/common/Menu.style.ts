import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';

interface MenuStyleProps {
  $isLast?: boolean;
  $isIcon?: boolean;
}

const Wrapper = styled.Pressable``;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconView = styled.View`
  padding: ${theme.space[3]};
  padding-right: 0;
`;

const Icon = styled.Image`
  width: 22px;
  height: 22px;
`;

const TitleView = styled.View<MenuStyleProps>`
  flex: 1;
  height: ${({$isIcon}) => ($isIcon ? '56px' : '63px')};
  justify-content: center;
  border-color: ${theme.colors.lightgray};
  border-bottom-width: ${({$isLast}) => ($isLast ? '0px' : '1px')};
  margin: 0 ${theme.space[3]};
`;

const Title = styled.Text<MenuStyleProps>`
  color: ${theme.colors.black};
  font-size: ${({$isIcon}) =>
    $isIcon ? theme.fontSizes[2] : theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
`;

const Info = styled.Text`
  color: ${theme.colors.walletGray};
  font-size: 13px;
`;

export {Container, Icon, IconView, Info, Title, TitleView, Wrapper};
