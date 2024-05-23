import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../../assets/styles/theme.css';
import {Menu as MenuType} from '../../../constants/menus';
import Menu from './Menu';

const Wrapper = styled.View`
  padding-bottom: ${theme.space[2]};
  border-radius: ${theme.radii.large};
  overflow: hidden;
`;

const Container = styled.ScrollView`
  height: fit-content;
  background: ${theme.colors.white};
  border-radius: ${theme.radii.large};
`;

const MenusView = styled.View`
  flex: 1;
`;

interface MenusProps {
  menus: MenuType[];
}

const Menus = ({menus}: MenusProps) => {
  const isLast = (idx: number) => idx + 1 === menus.length;

  return (
    <Wrapper>
      <Container>
        <MenusView>
          {menus.map((menu, idx) => (
            <Menu key={menu.title} menu={menu} isLast={isLast(idx)} />
          ))}
        </MenusView>
      </Container>
    </Wrapper>
  );
};

export default Menus;
