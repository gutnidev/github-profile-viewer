import { FC, ReactNode } from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

interface Props {
    title: string;
    children?: ReactNode;
}

const ResumeContentItem: FC<Props> = ({ title, children }) => (
  <>
    <Grid item xs={12} md={3}>
      <Typography
        variant="body1"
        fontSize={20}
        lineHeight={1.2}
        sx={(theme) => ({
          textAlign: 'left',
          [theme.breakpoints.down('md')]: {
            textAlign: 'center',
          },
        })}
      >
        {title}
      </Typography>
    </Grid>

    <Grid item xs={12} md={9}>
      {children}
    </Grid>

    <Grid item xs={12}>
      <Divider sx={{ borderBottomColor: grey['300'] }} />
    </Grid>
  </>
);

export default ResumeContentItem;
