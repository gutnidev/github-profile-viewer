import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface Props {
    userLanguages: [string, number][];
}

const Languages: FC<Props> = ({ userLanguages }) => {
  if (!userLanguages?.length) return <Typography>Languages not found...</Typography>;

  return <>{userLanguages.map(([key, val]) => <Typography key={key}>{`${key}: ${val}%`}</Typography>)}</>;
};

export default Languages;
