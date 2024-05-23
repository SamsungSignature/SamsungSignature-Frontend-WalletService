import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import imagePath from '../../../assets/imagePath';

const screen = Dimensions.get('screen');

const Wrapper = styled.View`
  padding-left: ${screen.width / 20}px;
`;

const LogoImg = styled.Image`
  width: ${Math.floor(screen.width * (4 / 10))}px;
`;

const Logo = () => {
  return (
    <Wrapper>
      <LogoImg source={imagePath.logotext} resizeMode="contain" />
    </Wrapper>
  );
};

export default Logo;
