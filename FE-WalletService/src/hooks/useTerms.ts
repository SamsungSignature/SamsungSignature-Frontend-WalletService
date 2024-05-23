import {useState} from 'react';
import {Alert} from 'react-native';
import TERMS, {Term} from '../constants/terms';
import createCheckArray from '../functions/createCheckArray';

interface Options {
  function?: {
    isFunction: boolean;
    props: any;
  };
}

const useTerms = (type: string, option?: Options) => {
  let terms: Term[];
  if (!option?.function?.isFunction) {
    terms = TERMS[type] as Term[];
  } else {
    const functionTerm = TERMS[type] as (props: any) => Term[];
    terms = functionTerm(option?.function?.props);
  }

  const [agreement, setAgreement] = useState(false);
  const [termChecks, setTermChecks] = useState<boolean[]>(
    createCheckArray(terms.length),
  );

  // 유효성 확인
  const checkValid = () => {
    if (!agreement) {
      return false;
    }

    for (let i = 0; i < terms.length; i++) {
      if (!terms[i].isOptional && !termChecks[i]) {
        return false;
      }
    }

    return true;
  };

  const agree = async () => {
    if (!checkValid()) {
      Alert.alert('필수 항목을 확인하세요.');
    }
  };

  return {
    agreement,
    setAgreement,
    termChecks,
    setTermChecks,
    checkValid,
    agree,
  };
};

export default useTerms;
