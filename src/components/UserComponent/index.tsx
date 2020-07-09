/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { FunctionComponent } from 'react';

import { UserBox, UserTitle, UserText, UserLink } from './styles';

interface UserProps {
  user: {
    id: number;
    login: string;
    avatar_url: string;
    bio: string;
    html_url: string;
  };
}

const UserComponent: FunctionComponent<UserProps> = ({ user }) => {
  return (
    <>
      <UserBox>
        <UserTitle>
          Login:
          {user.login}
        </UserTitle>
        <UserText>
          Bio:
          {user.bio}
        </UserText>
        <UserLink href={user.html_url}>
          Site:
          {user.html_url}
        </UserLink>
      </UserBox>
    </>
  );
};

export default UserComponent;
