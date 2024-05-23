import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';

const Wrapper = styled.Pressable`
  border-radius: ${theme.radii.circle};
  align-items: center;
  justify-content: center;
  padding: ${theme.space[2]};
`;

export {Wrapper};
