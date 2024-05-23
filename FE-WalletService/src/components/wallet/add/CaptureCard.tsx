import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {Camera, CameraDevice} from 'react-native-vision-camera';
import styled from 'styled-components/native';
import Backdrop from './Backdrop';
import Buttons from './Buttons';

const StyledCamera = styled(Camera)`
  z-index: 1;
`;

interface CaptureCardProps {
  device: CameraDevice;
  isActive: boolean;
  setCameraOn: Dispatch<SetStateAction<boolean>>;
}

const CaptureCard = ({device, isActive, setCameraOn}: CaptureCardProps) => {
  const flex = {
    top: 4,
    side: 1,
    center: 3,
    bottom: 6,
  };

  useEffect(() => {
    Alert.alert('수동으로 카드 입력을 눌러주세요.');
  }, []);

  return (
    <>
      <StyledCamera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
      />
      <Backdrop flex={flex} />
      <Buttons flex={flex} setCameraOn={setCameraOn} />
    </>
  );
};

export default CaptureCard;
