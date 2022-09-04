import React from 'react';
import BinocularIcon from 'icons/BinocularIcon';
import AppArticle from 'components/common/AppArticle';
import { Box } from '@mui/material';
import { EmptySearchedUsersSx } from './EmptySearchedUsers.styles';

const EmptySearchedUsers = () => (
  <>
    <AppArticle text="Recently selected users will appear here...." />
    <Box sx={EmptySearchedUsersSx.svgWrap}>
      <BinocularIcon />
    </Box>
  </>
);

export default React.memo(EmptySearchedUsers);
