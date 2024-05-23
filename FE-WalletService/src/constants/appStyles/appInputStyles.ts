import {theme} from '../../assets/styles/theme.css';
import {AppInputStyle} from '../../components/common/AppInput';

const SIGNUP_INPUT: AppInputStyle = {
  titleColor: theme.colors.darkgray,
  titleWeight: theme.fontWeights.medium,
  focusColor: theme.colors.googleblue,
};

const GENERAL: AppInputStyle = {
  titleColor: theme.colors.black,
  titleWeight: theme.fontWeights.semibold,
  focusColor: theme.colors.darkgray,
  fontSize: '17px',
  padding: '8px 0',
};

interface InputStyles {
  SIGNUP_INPUT: AppInputStyle;
  GENERAL: AppInputStyle;
}

const INPUTS: InputStyles = {
  SIGNUP_INPUT,
  GENERAL,
};

export default INPUTS;
