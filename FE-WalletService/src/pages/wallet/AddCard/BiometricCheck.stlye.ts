import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';
import {Wrapper} from '../Common.style';

const screen = Dimensions.get('screen');

const StyledWrapper = styled(Wrapper)`
  position: relative;
  background: ${theme.colors.background};
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  flex: 1;
  width: 100%;
  height: 300px;
`;

const Info = styled.Text`
  font-size: 16px;
  font-weight: ${theme.fontWeights.medium};
  padding: 24px;
`;

export {Image, Info, StyledWrapper};
