import React, { FC } from 'react';
import { IRepositoryItem } from 'types';
import { Box, Link, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

interface Props {
    userRepos: IRepositoryItem[] | null;
}

const RecentRepos: FC<Props> = ({ userRepos }) => {
  if (!userRepos?.length) return <Typography>Repos not found...</Typography>;
  return (
    <Box>
      {userRepos.splice(0, 5).map((repo) => (
        <Box key={repo.id} sx={{ marginBottom: '0.3rem' }}>
          <Link
            href={repo.html_url}
            target="_blank"
            color={blue}
            underline="hover"
          >
            {`${repo.name}`}
          </Link>
          <Typography variant="caption" color="text.secondary">
            {` (${new Date(repo.updated_at).toLocaleString()})`}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default RecentRepos;
