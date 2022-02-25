import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';

import { MdLogout } from 'react-icons/md';

const UserWrapper = styled.a`
  display: flex;
  align-items: center;
  padding: 1em 0;
  border-bottom: 1px solid #4f5962;
`;

const UserImg = styled.img`
  max-height: 50px;
  max-width: 50px;
  margin: 7px;
  border-radius: 50%;
`;

const UserText = styled.div`
  position: relative;
  margin: auto;
  padding: 0.1em 0.5em;
  font-size: 20px;
  font-family: 'Segoe UI';
  font-weight: 400;
  white-space: nowrap;
  color: white;
  letter-spacing: -1px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Logout = styled(MdLogout)`
  color: #850202;
  width: 50px;
  display: block;
  flex-shrink: 1;
  font-size: 1.8rem;
  cursor: pointer;
  &.collapse {
    visibility: hidden;
  }
`;

function User({ collapse }) {
  return (
    <UserWrapper>
      <UserImg src="https://media-exp1.licdn.com/dms/image/C5603AQHL16fDhzVTCQ/profile-displayphoto-shrink_200_200/0/1516828914548?e=1648684800&v=beta&t=b7PAWOoKy8pWEYT6FfYFdAlq4At95hSp_jSQmiguzSU" />
      <UserText>Daniel Squittieri Gomez</UserText>
      <Logout className={cx({ collapse })} />
    </UserWrapper>
  );
}

export default User;
