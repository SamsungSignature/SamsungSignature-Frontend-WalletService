import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';

interface NoCardsStyleProps {
  $active?: boolean;
}

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  padding: ${theme.space[1]} 0;
  align-items: center;
`;

const Section = styled.View`
  gap: ${theme.space[3]};
  align-items: center;
  margin: 10px 8px;
`;

const MainImage = styled.Image`
  height: 220px;
`;

const Title = styled.Text`
  text-align: center;
  color: ${theme.colors.darkgray};
  font-size: ${theme.fontSizes[4]};
  font-weight: ${theme.fontWeights.bold};
`;

const TitleView = styled.View``;

const Info = styled.Text`
  text-align: center;
  color: ${theme.colors.darkgray};
  font-size: 15px;
  font-weight: ${theme.fontWeights.medium};
`;

const PageView = styled.View`
  flex-direction: row;
  gap: ${theme.space[3]};
  padding: 10px 0;
`;

const Page = styled.View<NoCardsStyleProps>`
  width: 7px;
  height: 7px;
  background: ${({$active}) =>
    $active ? theme.colors.walletGray : theme.colors.transparent};
  border-radius: ${theme.radii.circle};
  border-color: ${theme.colors.walletGray};
  border-width: 1px;
`;

export {Info, MainImage, Page, PageView, Section, Title, TitleView, Wrapper};
