import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';
import {MoreItem} from './AppHeaderMore';

const Wrapper = styled.Pressable`
  padding: 14px 24px;
`;

const Title = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
`;

interface AppHeaderMoreItemProps {
  item: MoreItem;
}

const AppHeaderMoreItem = ({item}: AppHeaderMoreItemProps) => {
  const {title, onPress} = item;
  const onPressed = ({pressed}: {pressed: boolean}) => ({
    backgroundColor: pressed
      ? theme.colors.lightergray
      : theme.colors.transparent,
  });

  return (
    <Wrapper
      onPress={onPress}
      style={onPressed}
      android_ripple={{color: theme.colors.lightgray}}>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default AppHeaderMoreItem;
