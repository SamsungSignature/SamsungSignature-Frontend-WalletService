import React, {Dispatch, SetStateAction} from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import iconPath from '../../assets/iconPath';
import parseWithDefault from '../../functions/parseWithDefault';
import {Wrapper} from './AppCheckbox.style';

interface AppCheckboxStyle {
  size?: number;
}

interface AppCheckboxProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  style?: AppCheckboxStyle;
}

const AppCheckbox = ({checked, setChecked, style}: AppCheckboxProps) => {
  const defaultStyle: AppCheckboxStyle = {
    size: 22,
  };
  const parsedStyle = parseWithDefault(style, defaultStyle);

  const onPress = () => {
    setChecked(!checked);
  };

  return (
    <Wrapper $style={parsedStyle} $checked={checked} onPress={onPress}>
      <WithLocalSvg
        asset={iconPath.check}
        width={`${parsedStyle.size && parsedStyle.size - 2}px`}
        height={`${parsedStyle.size && parsedStyle.size - 2}px`}
      />
    </Wrapper>
  );
};

export type {AppCheckboxStyle};
export default AppCheckbox;
