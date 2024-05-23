import {useHeaderHeight} from '@react-navigation/elements';
import React from 'react';
import Menus from '../../../components/wallet/common/Menus';
import MENUS from '../../../constants/menus';
import {Wrapper} from '../Common.style';

const AddCardMain = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Wrapper $headerHeight={headerHeight}>
      <Menus menus={MENUS.ADD_CARD} />
    </Wrapper>
  );
};

export default AddCardMain;
