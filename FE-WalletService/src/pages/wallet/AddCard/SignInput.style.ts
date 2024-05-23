import SignatureCapture from 'react-native-signature-capture';
import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';
import {Wrapper} from '../Common.style';

interface SignInputStyleProps {
  $flex?: number;
}

const StyledWrapper = styled(Wrapper)`
  padding: 0 24px;
`;

const Info = styled.Text`
  color: ${theme.colors.darkgray};
  font-size: 14px;
  font-weight: ${theme.fontWeights.medium};
`;

const SignatureBox = styled.View`
  position: relative;
  flex: 7;
`;

const SignatureView = styled.View`
  flex: 1;
  border-width: 0.5px;
  border-radius: ${theme.radii.button};
  border-color: ${theme.colors.lightergray};
  overflow: hidden;
`;

const StyledSignature = styled(SignatureCapture)`
  flex: 1;
`;

const RetryView = styled.View`
  position: absolute;
  bottom: -70px;
  width: 100%;
  align-items: center;
`;

export {
  Info,
  RetryView,
  SignatureBox,
  SignatureView,
  StyledSignature,
  StyledWrapper,
};
