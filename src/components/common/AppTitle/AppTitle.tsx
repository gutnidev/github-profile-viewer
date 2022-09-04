import { FC, memo } from 'react';
import { Typography } from '@mui/material';
import { AppTitleSx } from './AppTitle.styles';

interface Props {
  text: string;
}

const AppTitle: FC<Props> = ({ text }) => (
  <Typography
    sx={AppTitleSx.title}
    variant="h1"
    textTransform="uppercase"
    textAlign="center"
  >
    {text}
  </Typography>
);

export default memo(AppTitle);
