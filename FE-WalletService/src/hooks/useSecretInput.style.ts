import styled from 'styled-components/native';
import {theme} from '../assets/styles/theme.css';

interface SecretInputStyleProps {
  $active?: boolean;
}

const SecretInputWrapper = styled.View`
  flex-direction: row;
  gap: ${theme.space[3]};
  padding: ${theme.space[4]} 0;
`;

const Dot = styled.View<SecretInputStyleProps>`
  width: 14px;
  height: 14px;
  border-radius: ${theme.radii.circle};
  background-color: ${({$active}) =>
    $active ? theme.colors.darkblue : theme.colors.lightergray};
`;

const SecretKeyboardWrapper = styled.View`
  background-color: #0c101c;
`;

const InfoView = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: ${theme.space[2]};
  padding: 10px 0;
  min-height: 42px;
`;

const ShieldIconView = styled.View`
  transform: scaleX(0.9);
`;

const Info = styled.Text`
  color: ${theme.colors.lightgray};
`;

const NumsView = styled.View``;

const NumRow = styled.View`
  flex-direction: row;
`;

const NumView = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 60px;
`;

const Num = styled.Text`
  color: ${theme.colors.white};
  font-size: 22px;
  padding: ${theme.space[3]} 0;
`;

const AddonBox = styled.View`
  flex-direction: row;
`;

const AddonView = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${theme.space[3]} 0;
  min-height: 68px;
`;

export {
  AddonBox,
  AddonView,
  Dot,
  Info,
  InfoView,
  Num,
  NumRow,
  NumView,
  NumsView,
  SecretInputWrapper,
  SecretKeyboardWrapper,
  ShieldIconView,
};
