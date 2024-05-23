import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';

interface CaptureCardStyleProps {
  $flex?: number;
  $bottom?: boolean;
  $top?: boolean;
  $left?: boolean;
  $right?: boolean;
  $vertical?: boolean;
}

const Wrapper = styled.View`
  z-index: 2;
  height: 100%;
  width: 100%;
`;

const BackdropView = styled.View<CaptureCardStyleProps>`
  flex: ${({$flex}) => $flex};
  background: ${theme.colors.lightergray};
  opacity: 0.5;
`;

const BackdropCenter = styled.View`
  position: relative;
  flex: 3;
  flex-direction: row;
`;

const Focus = styled.View`
  z-index: 1;
  height: 100%;
  aspect-ratio: 3/2;
`;

const Border = styled.View<CaptureCardStyleProps>`
  position: absolute;
  top: ${({$top}) => ($top ? '-5px' : 'auto')};
  bottom: ${({$bottom}) => ($bottom ? '-5px' : 'auto')};
  left: ${({$left}) => ($left ? '-5px' : 'auto')};
  right: ${({$right}) => ($right ? '-5px' : 'auto')};
  width: ${({$vertical}) => ($vertical ? '5px' : '32px')};
  height: ${({$vertical}) => ($vertical ? '32px' : '5px')};
  background: ${theme.colors.white};
  border-top-right-radius: ${({$top, $right}) =>
    $top && $right ? '99px' : '0px'};
  border-top-left-radius: ${({$top, $left}) =>
    $top && $left ? '99px' : '0px'};
  border-bottom-right-radius: ${({$bottom, $right}) =>
    $bottom && $right ? '99px' : '0px'};
  border-bottom-left-radius: ${({$bottom, $left}) =>
    $bottom && $left ? '99px' : '0px'};
`;

export {BackdropCenter, BackdropView, Border, Focus, Wrapper};
