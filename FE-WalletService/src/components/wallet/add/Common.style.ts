import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';

const Wrapper = styled.View`
  gap: ${theme.space[1]};
`;

const Container = styled.View`
  flex-direction: row;
  gap: ${theme.space[2]};
  align-items: center;
`;

const Title = styled.Text`
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeights.semibold};
`;

export {Container, Title, Wrapper};
