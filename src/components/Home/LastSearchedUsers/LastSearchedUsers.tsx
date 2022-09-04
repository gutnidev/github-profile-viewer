import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRecentUser } from 'types';
import { appLocalStorage } from 'utils/appLocalStorage';
import {
  Avatar, Box, List, ListItemAvatar, ListItemButton, ListItemText,
} from '@mui/material';
import AppArticle from 'components/common/AppArticle';
import { getListText } from './helpers';
import EmptySearchedUsers from '../EmptySearchedUsers';

const LastSearchedUsers = () => {
  const navigate = useNavigate();
  const [recentUsers] = useState<IRecentUser[]>(appLocalStorage.getRecentUsers());

  // ! handlers
  const onRecentClick = (username: string) => navigate(username);

  // ! render
  if (!recentUsers.length) return <EmptySearchedUsers />;

  return (
    <Box>
      <AppArticle text="Recently selected users:" />

      <List>
        {recentUsers.map((user) => (
          <ListItemButton
            key={user.id}
            alignItems="center"
            divider
            onClick={() => onRecentClick(user.login)}
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={user.avatar_url} />
            </ListItemAvatar>

            <ListItemText
              primary={getListText(user)}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default memo(LastSearchedUsers);
