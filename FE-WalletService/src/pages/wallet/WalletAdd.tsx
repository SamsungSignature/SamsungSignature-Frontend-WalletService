import {useHeaderHeight} from '@react-navigation/elements';
import React from 'react';
import Menus from '../../components/wallet/common/Menus';
import MENUS from '../../constants/menus';
import {Wrapper} from './Common.style';

const WalletAdd = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Wrapper $headerHeight={headerHeight}>
      <Menus menus={MENUS.ADD} />
    </Wrapper>
  );
};

export default WalletAdd;
