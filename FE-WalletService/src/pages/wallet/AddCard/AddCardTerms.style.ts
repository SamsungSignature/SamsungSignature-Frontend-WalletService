import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';

const Container = styled.ScrollView`
  flex: 1;
`;

const InfoView = styled.View`
  gap: 14px;
  padding: 14px;
  padding-top: 0;
`;

const Info = styled.Text`
  color: ${theme.colors.darkgray};
  font-weight: ${theme.fontWeights.medium};
`;

const TermsView = styled.View`
  flex: 1;
  background: ${theme.colors.white};
  border-radius: 24px 24px 0 0;
  padding: ${theme.space[4]} 40px;
  gap: 24px;
  overflow: hidden;
`;

const TermView = styled.View`
  flex-direction: row;
  gap: ${theme.space[3]};
`;

const TermTextView = styled.View`
  flex: 1;
  gap: ${theme.space[2]};
`;

const TermTitle = styled.Text`
  color: ${theme.colors.darkgray};
  font-weight: ${theme.fontWeights.medium};
`;

const TermDetail = styled.Text`
  color: ${theme.colors.black};
  font-size: 15px;
  font-weight: ${theme.fontWeights.bold};
  text-decoration: underline;
`;

const AllCheckBox = styled.View`
  flex-direction: row;
  gap: ${theme.space[3]};
  align-items: center;
  background: ${theme.colors.white};
  padding: 0 ${theme.space[3]};
  border-radius: 0 0 24px 24px;
`;

const AllCheckView = styled.View`
  flex: 1;
  flex-direction: row;
  height: 100%;
  gap: ${theme.space[3]};
  align-items: center;
  padding: 30px 24px;
  border-color: ${theme.colors.lightergray};
  border-style: dotted;
  border-top-width: 2px;
`;

const AllCheckText = styled.Text`
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeights.bold};
`;

export {
  AllCheckBox,
  AllCheckText,
  AllCheckView,
  Container,
  Info,
  InfoView,
  TermDetail,
  TermTextView,
  TermTitle,
  TermView,
  TermsView,
};
