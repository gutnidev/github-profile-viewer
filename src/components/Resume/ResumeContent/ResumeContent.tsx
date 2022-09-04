import { FC, useMemo } from 'react';
import { IRepositoryItem, IUser } from 'types';
import { Grid, Typography } from '@mui/material';
import ResumeContentItem from './components/ResumeContentItem';
import RecentRepos from './components/RecentRepos';
import Languages from './components/Languages';

interface Props {
  user: IUser;
  userRepos: IRepositoryItem[] | null;
  reposLoading: boolean;
}

const ResumeContent: FC<Props> = ({ user, userRepos, reposLoading }) => {
  // ! variables
  const githubProfile = `On GitHub as an early adopter since ${new Date(user.created_at).getFullYear()}, 
  ${user.name || user.login} is a developer with ${user.public_repos} public repositories 
  and ${user.followers} followers.`;

  // ! memos
  const userLanguages = useMemo(() => {
    if (!userRepos?.length) return [];

    let languagesNumber = 0;

    // count languages in every repo
    const languagesCount = userRepos.reduce<{[key: string]: number;}>((acc, repoItem) => {
      const repoLang = repoItem.language;
      if (!repoLang) return acc;

      if (acc[repoLang]) acc[repoLang] += 1;
      if (!acc[repoLang]) acc[repoLang] = 1;
      languagesNumber += 1;

      return acc;
    }, {});

    const langEntries = Object.entries(languagesCount);
    if (!langEntries.length) return [];

    // count languages percentage
    const percentageLangs = langEntries.reduce<{[key: string]: number;}>((acc, [langKey, langValue]) => {
      acc[langKey] = Math.round((langValue / languagesNumber) * 100);
      return acc;
    }, {});

    return Object.entries(percentageLangs).sort(([, valA], [, valB]) => valB - valA);
  }, [userRepos]);

  // ! render
  return (
    <Grid
      container
      justifyContent="space-between"
      spacing={2}
    >
      <ResumeContentItem title="Github Profile">
        <Typography>
          {githubProfile}
        </Typography>
      </ResumeContentItem>

      <ResumeContentItem title="Languages">
        {reposLoading ? 'Loading...' : <Languages userLanguages={userLanguages} />}
      </ResumeContentItem>

      <ResumeContentItem title="Recent Repos">
        {reposLoading ? 'Loading...' : <RecentRepos userRepos={userRepos} />}
      </ResumeContentItem>
    </Grid>
  );
};

export default ResumeContent;
