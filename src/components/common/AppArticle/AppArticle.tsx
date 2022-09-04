import { FC, memo } from 'react';
import { Typography } from '@mui/material';
import { AppArticleSx } from './AppArticle.styles';

interface Props {
  text: string;
}

const AppArticle: FC<Props> = ({ text }) => (
  <Typography
    variant="body1"
    sx={AppArticleSx.article}
  >
    {text}
  </Typography>
);

export default memo(AppArticle);
