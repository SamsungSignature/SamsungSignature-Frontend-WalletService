import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import iconPath from '../../assets/iconPath';
import {Permission as PermissionType} from '../../constants/permissions';
import {Content, IconBox, TextBox, Title, Wrapper} from './Permission.style';

interface PermissionProps {
  permission: PermissionType;
}

const Permission = ({permission}: PermissionProps) => {
  return (
    <Wrapper>
      <IconBox>
        <WithLocalSvg asset={iconPath[permission.icon]} />
      </IconBox>
      <TextBox>
        <Title>{permission.title}</Title>
        <Content>{permission.content}</Content>
      </TextBox>
    </Wrapper>
  );
};

export default Permission;
