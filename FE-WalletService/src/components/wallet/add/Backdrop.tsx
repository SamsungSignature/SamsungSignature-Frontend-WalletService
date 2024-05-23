import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BackdropCenter,
  BackdropView,
  Border,
  Focus,
  Wrapper,
} from './Backdrop.style';

interface BackdropProps {
  flex: {
    top: number;
    side: number;
    bottom: number;
  };
}

const Backdrop = ({flex}: BackdropProps) => {
  return (
    <Wrapper style={StyleSheet.absoluteFill}>
      <BackdropView $flex={flex.top} />
      <BackdropCenter>
        <BackdropView $flex={flex.side} />
        <Focus>
          <Border $left $bottom $vertical />
          <Border $left $bottom />
          <Border $right $bottom $vertical />
          <Border $right $bottom />
          <Border $left $top $vertical />
          <Border $left $top />
          <Border $right $top $vertical />
          <Border $right $top />
        </Focus>
        <BackdropView $flex={flex.side} />
      </BackdropCenter>
      <BackdropView $flex={flex.bottom} />
    </Wrapper>
  );
};

export default Backdrop;
