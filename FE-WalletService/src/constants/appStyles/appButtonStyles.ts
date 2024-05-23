import {theme} from '../../assets/styles/theme.css';
import {AppButtonStyle} from '../../components/common/AppButton';

// Account

const TO_LOGIN: AppButtonStyle = {
  backgroundColor: 'transparent',
  color: theme.colors.lightgray,
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.semibold,
  borderColor: theme.colors.lightgray,
  borderWidth: '1px',
  padding: '10px 20px',
  textAlign: 'left',
};

const SOCIAL_LOGIN: AppButtonStyle = {
  backgroundColor: theme.colors.googleblue,
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.semibold,
  padding: '5px',
};

const QR_LOGIN: AppButtonStyle = {
  backgroundColor: theme.colors.lightergray,
  color: theme.colors.black,
  fontWeight: theme.fontWeights.bold,
  padding: '5px',
};

const SERVICE: AppButtonStyle = {
  backgroundColor: theme.colors.lightergray,
  color: theme.colors.black,
  fontWeight: theme.fontWeights.bold,
};

// Wallet

const ADD_CARD: AppButtonStyle = {
  width: '38%',
  padding: '10px',
  backgroundColor: theme.colors.blue,
  fontSize: theme.fontSizes[2],
  underlayColor: theme.colors.darkblue,
  rippleColor: theme.colors.darkerblue,
};

const GRAY_SAMLL: AppButtonStyle = {
  width: '90px',
  padding: '8px',
  backgroundColor: '#e3e3e3',
  underlayColor: theme.colors.lightergray,
  rippleColor: theme.colors.lightgray,
  color: theme.colors.darkgray,
  fontSize: theme.fontSizes[1],
};

const BORDER_MINI: AppButtonStyle = {
  width: '70px',
  color: theme.colors.walletGray,
  fontSize: theme.fontSizes[0],
  fontWeight: theme.fontWeights.semibold,
  padding: '2.5px',
  backgroundColor: theme.colors.transparent,
  underlayColor: theme.colors.transparent,
  rippleColor: theme.colors.lightergray,
  borderWidth: '1px',
  borderColor: theme.colors.lightergray,
};

// Common

const SMALL: AppButtonStyle = {
  width: '60%',
  backgroundColor: theme.colors.googleblue,
};

const GRAY_SQUARE: AppButtonStyle = {
  color: theme.colors.black,
  fontWeight: theme.fontWeights.bold,
  backgroundColor: theme.colors.lightergray,
  borderRadius: theme.radii.button,
};

const TRANSPARENT: AppButtonStyle = {
  fontWeight: theme.fontWeights.medium,
  backgroundColor: theme.colors.transparent,
  borderRadius: theme.radii.circle,
  color: theme.colors.black,
  underlayColor: theme.colors.lightgray,
  rippleColor: theme.colors.lightergray,
};

interface ButtonStyles {
  TO_LOGIN: AppButtonStyle;
  SOCIAL_LOGIN: AppButtonStyle;
  QR_LOGIN: AppButtonStyle;
  SERVICE: AppButtonStyle;
  ADD_CARD: AppButtonStyle;
  GRAY_SAMLL: AppButtonStyle;
  BORDER_MINI: AppButtonStyle;
  SMALL: AppButtonStyle;
  GRAY_SQUARE: AppButtonStyle;
  TRANSPARENT: AppButtonStyle;
}

const BUTTONS: ButtonStyles = {
  // Account
  TO_LOGIN,
  SOCIAL_LOGIN,
  QR_LOGIN,
  SERVICE,
  // Wallet
  ADD_CARD,
  GRAY_SAMLL,
  BORDER_MINI,
  // Common
  SMALL,
  GRAY_SQUARE,
  TRANSPARENT,
};

export default BUTTONS;
