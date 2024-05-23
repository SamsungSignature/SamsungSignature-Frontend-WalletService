import {ImageSourcePropType} from 'react-native';

/**
 * 이미지 등록시 주의사항
 * 1. android 가 대문자와 일부 특수문자를 인식하지 못하기 때문에 "이미지 파일명은 소문자로만 이루어지게 한다."
 * 2. 컴포넌트에서 사용 시 사용에 편리하게 하기 위해 "이미지 경로 인터페이스에 등록 후 사용한다."
 * 3. 잘못 입력할 시 앱이 실행되지 않으므로, "png, jpg 등 확장자 명을 명확히 입력한다."
 */

interface ImagePath {
  [key: string]: ImageSourcePropType;
  account: ImageSourcePropType;
  bcwooricheck: ImageSourcePropType;
  bcwooricredit: ImageSourcePropType;
  boardingpass: ImageSourcePropType;
  biometriccheck: ImageSourcePropType;
  coupon: ImageSourcePropType;
  couponline: ImageSourcePropType;
  couponlinew: ImageSourcePropType;
  defaultcard: ImageSourcePropType;
  digitalcertificate: ImageSourcePropType;
  digitalkey: ImageSourcePropType;
  digitalasset: ImageSourcePropType;
  googlelogo: ImageSourcePropType;
  logo: ImageSourcePropType;
  logotext: ImageSourcePropType;
  membership: ImageSourcePropType;
  membershipline: ImageSourcePropType;
  membershiplinew: ImageSourcePropType;
  mobilecarrierservice: ImageSourcePropType;
  mobileid: ImageSourcePropType;
  paycard: ImageSourcePropType;
  paylogotext: ImageSourcePropType;
  qr: ImageSourcePropType;
  signaturecard: ImageSourcePropType;
  ticket: ImageSourcePropType;
  walletmain: ImageSourcePropType;
}

const imagePath: ImagePath = {
  // Account
  googlelogo: require('./images/googlelogo.png'),
  qr: require('./images/qr.png'),
  // Wallet
  account: require('./images/account.png'),
  bcwooricheck: require('./images/bcwooricheck.png'),
  bcwooricredit: require('./images/bcwooricredit.png'),
  boardingpass: require('./images/boardingpass.png'),
  biometriccheck: require('./images/biometriccheck.png'),
  coupon: require('./images/coupon.png'),
  couponline: require('./images/couponline.png'),
  couponlinew: require('./images/couponlinew.png'),
  defaultcard: require('./images/defaultcard.png'),
  digitalcertificate: require('./images/digitalcertificate.png'),
  digitalkey: require('./images/digitalkey.png'),
  digitalasset: require('./images/digitalasset.png'),
  logo: require('./images/logo.png'),
  logotext: require('./images/logotext.png'),
  membership: require('./images/membership.png'),
  membershipline: require('./images/membershipline.png'),
  membershiplinew: require('./images/membershiplinew.png'),
  mobilecarrierservice: require('./images/mobilecarrierservice.png'),
  mobileid: require('./images/mobileid.png'),
  paycard: require('./images/paycard.png'),
  paylogotext: require('./images/paylogotext.png'),
  signaturecard: require('./images/signaturecard.png'),
  ticket: require('./images/ticket.png'),
  // gif
  walletmain: require('./images/walletmain.gif'),
};

export default imagePath;
