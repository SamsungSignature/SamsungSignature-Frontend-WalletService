import React from 'react';
import {theme} from '../../../assets/styles/theme.css';
import {
  TabButton,
  TabDecoration,
  TabText,
  TabTextView,
  TabView,
  Wrapper,
} from './TabBar.style';

const TabBar = () => {
  const onPress = () => {};
  const onPressed = ({pressed}: {pressed: boolean}) => ({
    backgroundColor: pressed
      ? theme.colors.lightergray
      : theme.colors.transparent,
  });

  return (
    <Wrapper>
      <TabView>
        <TabButton
          onPress={onPress}
          style={onPressed}
          android_ripple={{color: theme.colors.lightgray}}>
          <TabTextView>
            <TabText $active>빠른 실행</TabText>
            <TabDecoration $active />
          </TabTextView>
        </TabButton>
      </TabView>
      <TabView>
        <TabButton
          onPress={onPress}
          style={onPressed}
          android_ripple={{color: theme.colors.lightgray}}>
          <TabTextView>
            <TabText>전체</TabText>
            <TabDecoration />
          </TabTextView>
        </TabButton>
      </TabView>
    </Wrapper>
  );
};

export default TabBar;
