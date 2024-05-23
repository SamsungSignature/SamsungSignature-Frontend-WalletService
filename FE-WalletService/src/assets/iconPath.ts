import {ImageSourcePropType} from 'react-native';

interface IconPath {
  [key: string]: ImageSourcePropType;
  alarm: ImageSourcePropType;
  backspace: ImageSourcePropType;
  bell: ImageSourcePropType;
  camera: ImageSourcePropType;
  camerasquare: ImageSourcePropType;
  check: ImageSourcePropType;
  chevron: ImageSourcePropType;
  contact: ImageSourcePropType;
  fingerprint: ImageSourcePropType;
  flashlight: ImageSourcePropType;
  invisible: ImageSourcePropType;
  more: ImageSourcePropType;
  plus: ImageSourcePropType;
  pushnotification: ImageSourcePropType;
  question: ImageSourcePropType;
  search: ImageSourcePropType;
  shield: ImageSourcePropType;
  shuffle: ImageSourcePropType;
  visible: ImageSourcePropType;
}

const iconPath: IconPath = {
  alarm: require('./icons/alarm.svg'),
  backspace: require('./icons/backspace.svg'),
  bell: require('./icons/bell.svg'),
  camera: require('./icons/camera.svg'),
  camerasquare: require('./icons/camerasquare.svg'),
  check: require('./icons/check.svg'),
  chevron: require('./icons/chevron.svg'),
  contact: require('./icons/contact.svg'),
  fingerprint: require('./icons/fingerprint.svg'),
  flashlight: require('./icons/flashlight.svg'),
  invisible: require('./icons/invisible.svg'),
  more: require('./icons/more.svg'),
  plus: require('./icons/plus.svg'),
  pushnotification: require('./icons/pushnotification.svg'),
  question: require('./icons/question.svg'),
  search: require('./icons/search.svg'),
  shield: require('./icons/shield.svg'),
  shuffle: require('./icons/shuffle.svg'),
  visible: require('./icons/visible.svg'),
};

export default iconPath;
