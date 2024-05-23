import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import STYLES from '../../../constants/appStyles';
import {CardInfo} from '../../../pages/wallet/AddCard/CardInputs';
import AppInput from '../../common/AppInput';
import {Title, Wrapper} from './Common.style';

interface OwnerNameProps {
  setInputs: Dispatch<SetStateAction<CardInfo>>;
}

const OwnerName = ({setInputs}: OwnerNameProps) => {
  const [ownerName, setOwnerName] = useState('');

  useEffect(() => {
    setInputs(prev => ({...prev, owner_name: ownerName}));
  }, [ownerName]);

  return (
    <Wrapper>
      <Title>카드 소유자 이름 (선택)</Title>
      <AppInput
        value={ownerName}
        setValue={setOwnerName}
        style={STYLES.INPUTS.GENERAL}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </Wrapper>
  );
};

export default OwnerName;
