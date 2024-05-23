import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {theme} from '../../../assets/styles/theme.css';
import AppBackButton from './AppBackButton';
import {
  LeftView,
  RightView,
  Title,
  TitleView,
  Wrapper,
} from './AppHeader.style';
// import {Header} from '@react-navigation/elements'

type HeaderStyle = {backgroundColor?: string | undefined};

const AppHeader = (props: NativeStackHeaderProps) => {
  // title
  const customTitle = props.options.headerTitle;
  const title = props.options.title ? props.options.title : props.route.name;
  const headerStyle = props.options.headerStyle as HeaderStyle;

  const backgroundColor =
    headerStyle && headerStyle.backgroundColor
      ? headerStyle.backgroundColor
      : theme.colors.lightbackground;

  const headerTitle =
    typeof customTitle !== 'function'
      ? () => <Title>{title}</Title>
      : customTitle;

  // headerLeft
  const headerLeft = props.options.headerLeft;
  const canGoBack = props.navigation.canGoBack();
  const leftButton = headerLeft
    ? headerLeft({canGoBack})
    : AppBackButton({canGoBack});

  // headerRight
  const headerRight = props.options.headerRight;
  const rightButton = headerRight ? headerRight({canGoBack}) : null;

  return (
    <Wrapper $backgroundColor={backgroundColor}>
      <LeftView>{leftButton}</LeftView>
      <TitleView>
        {headerTitle({
          children: title,
        })}
      </TitleView>
      <RightView>{rightButton}</RightView>
    </Wrapper>
  );
};

export default AppHeader;
