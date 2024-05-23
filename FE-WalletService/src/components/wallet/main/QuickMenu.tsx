import React from 'react';
import styled from 'styled-components/native';
import imagePath from '../../../assets/imagePath';
import {theme} from '../../../assets/styles/theme.css';

const Wrapper = styled.View`
  flex: 2;
  align-items: flex-end;
  justify-content: flex-end;
`;

const QuickMenuBox = styled.View`
  flex-direction: row;
  padding: 14px 40px;
  gap: 12px;
  align-items: center;
`;

const Vr = styled.View`
  width: 1px;
  height: 10px;
  background: ${theme.colors.darkgray};
`;

const QuickMenuView = styled.View`
  flex-direction: row;
  gap: 6px;
`;

const QuickMenuIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const QuickMenuText = styled.Text`
  color: ${theme.colors.darkgray};
  font-weight: ${theme.fontWeights.semibold};
`;

const QuickMenu = () => {
  return (
    <Wrapper>
      <QuickMenuBox>
        <QuickMenuView>
          <QuickMenuIcon source={imagePath.couponline} resizeMode="contain" />
          <QuickMenuText>매장쿠폰</QuickMenuText>
        </QuickMenuView>
        <Vr />
        <QuickMenuView>
          <QuickMenuIcon
            source={imagePath.membershipline}
            resizeMode="contain"
          />
          <QuickMenuText>맴버십</QuickMenuText>
        </QuickMenuView>
      </QuickMenuBox>
    </Wrapper>
  );
};

export default QuickMenu;
