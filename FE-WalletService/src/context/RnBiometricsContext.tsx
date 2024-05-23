import React, {MutableRefObject, createContext, useEffect, useRef} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';

interface RnBiometricsProps {
  children?: React.ReactNode;
}

const RnBiometricsContext =
  createContext<MutableRefObject<ReactNativeBiometrics | null> | null>(null);

const RnBiometricsContainer = ({children}: RnBiometricsProps) => {
  const rnBiometrics = useRef<ReactNativeBiometrics>(
    new ReactNativeBiometrics(),
  );

  useEffect(() => {
    rnBiometrics.current.createKeys();
  }, []);

  return (
    <RnBiometricsContext.Provider value={rnBiometrics}>
      {children}
    </RnBiometricsContext.Provider>
  );
};

export {RnBiometricsContext};
export default RnBiometricsContainer;
