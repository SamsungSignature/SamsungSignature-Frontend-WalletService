import React, {useState} from 'react';
import {GestureResponderEvent, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import iconPath from '../../../assets/iconPath';
import {theme} from '../../../assets/styles/theme.css';
import {
  Backdrop,
  IconButton,
  IconView,
  ToggleView,
  Wrapper,
} from './AppHeaderMore.style';
import AppHeaderMoreItem from './AppHeaderMoreItem';

interface MoreItem {
  title: string;
  onPress: (event?: GestureResponderEvent) => void;
}

interface AppHeaderRightIconProps {
  icon: string;
  items: MoreItem[];
}

const AppHeaderMore = ({icon, items}: AppHeaderRightIconProps) => {
  // 모달 on/off
  const [toggle, setToggle] = useState(false);
  const handleTogle = () => {
    setToggle(!toggle);
  };

  // 눌렀을 때 색상 변경
  const onPressed = ({pressed}: {pressed: boolean}) => ({
    backgroundColor: pressed
      ? theme.colors.lightergray
      : theme.colors.transparent,
  });

  return (
    <Wrapper>
      <IconView>
        <IconButton
          onPress={handleTogle}
          style={onPressed}
          android_ripple={{color: theme.colors.lightgray}}>
          <WithLocalSvg asset={iconPath[icon]} />
        </IconButton>
      </IconView>
      {toggle && (
        <>
          <ToggleView style={style.shadow}>
            {items.map((item, idx) => (
              <AppHeaderMoreItem key={idx} item={item} />
            ))}
          </ToggleView>
          <Backdrop onPress={handleTogle} />
        </>
      )}
    </Wrapper>
  );
};

const style = StyleSheet.create({
  shadow: {
    elevation: 15,
  },
});

export type {MoreItem};
export default AppHeaderMore;
