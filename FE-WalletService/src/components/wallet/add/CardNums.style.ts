import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';

const IconView = styled.View`
  border-radius: ${theme.radii.circle};
  overflow: hidden;
  margin-right: ${theme.space[2]};
`;

const IconButton = styled.Pressable`
  background: ${theme.colors.lightergray};
  border-radius: ${theme.radii.circle};
  padding: 6px;
`;

const InputView = styled.View`
  flex: 1;
`;

export {IconButton, IconView, InputView};
