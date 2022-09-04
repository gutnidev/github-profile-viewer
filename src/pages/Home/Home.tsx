import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'context';
import { useErrorHandler } from 'hooks/useErrorHandler';
import { userService } from 'services/users';
import SearchForm from 'components/Home/SearchForm';
import LastSearchedUsers from 'components/Home/LastSearchedUsers';
import AppArticle from 'components/common/AppArticle';
import AppTitle from 'components/common/AppTitle';
import { Box, Divider } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();
  const { handleError } = useErrorHandler();
  const { setCurrentUser, setLoading } = useContext(AppContext);

  // ! handlers
  const onFormSubmit = async (searchValue: string) => {
    setLoading(true);
    try {
      const res = await userService.getUserByUsername(searchValue);
      setCurrentUser(res.data);
      navigate(res.data.login);
    } catch (error: any) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  // ! effects
  useEffect(() => {
    setCurrentUser(null);
  }, []);

  // ! render
  return (
    <Box>
      <AppTitle text="Search Github Profile" />
      <Divider sx={{ margin: '1rem 0' }} />

      <AppArticle text="This resource allows you to view information about Github users." />

      <SearchForm onFormSubmit={onFormSubmit} />

      <LastSearchedUsers />
    </Box>
  );
};

export default Home;
