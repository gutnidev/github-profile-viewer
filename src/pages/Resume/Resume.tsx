import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EAppRoutes } from 'routes';
import { AppContext } from 'context';
import { userService } from 'services/users';
import { IRepositoryItem } from 'types';
import { useErrorHandler } from 'hooks/useErrorHandler';
import { appLocalStorage } from 'utils/appLocalStorage';
import ResumeHeader from 'components/Resume/ResumeHeader';
import ResumeContent from 'components/Resume/ResumeContent';
import BackButton from 'components/common/BackButton';
import { Box, Divider } from '@mui/material';

const Resume = () => {
  const navigate = useNavigate();
  const { handleError } = useErrorHandler();
  const params = useParams<{username: string}>();
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);
  const [reposLoading, setReposLoading] = useState(false);
  const [userRepos, setUserRepos] = useState<IRepositoryItem[] | null>(null);

  // ! helpers
  const fetchRepos = async (username: string) => {
    setReposLoading(true);
    try {
      const res = await userService.getUserRepos(username);
      setUserRepos(res.data);
    } catch (error: any) {
      handleError(error);
    } finally {
      setReposLoading(false);
    }
  };

  const fetchCurrentUser = async () => {
    if (!params.username) return;
    setLoading(true);
    try {
      const res = await userService.getUserByUsername(params.username);
      setCurrentUser(res.data);
    } catch (error: any) {
      handleError(error);
      navigate(EAppRoutes.HOME);
    } finally {
      setLoading(false);
    }
  };

  // ! handlers
  const onBackClick = () => navigate(EAppRoutes.HOME);

  // ! effects
  useEffect(() => {
    if (!params.username) {
      navigate(EAppRoutes.HOME);
      return;
    }
    fetchRepos(params.username);
  }, [params.username]);

  useEffect(() => {
    if (currentUser) {
      appLocalStorage.setSearchedUser(currentUser);
      return;
    }

    fetchCurrentUser();
  }, [currentUser]);

  // ! render
  if (!currentUser) return null;

  const { name, login, avatar_url } = currentUser;

  return (
    <Box>
      <BackButton onClick={onBackClick} />
      <ResumeHeader
        avatarSrc={avatar_url}
        titleText={name || login}
      />

      <Divider sx={{ margin: '1rem 0' }} />

      <ResumeContent user={currentUser} userRepos={userRepos} reposLoading={reposLoading} />
    </Box>
  );
};

export default Resume;
