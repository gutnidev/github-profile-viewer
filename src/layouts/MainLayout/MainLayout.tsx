import { Suspense, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AppContext } from 'context';
import AppSpinner from 'components/common/AppSpinner';
import { Box, Container } from '@mui/material';
import { MainLayoutSx } from './MainLayout.styles';

const MainLayout = () => {
  const { loading } = useContext(AppContext);

  // ! render
  return (
    <Box sx={MainLayoutSx.mainBox}>
      <Container sx={MainLayoutSx.mainContainer} maxWidth="md">
        <Box sx={MainLayoutSx.wrapperBox}>
          {loading && <AppSpinner />}
          <Suspense fallback={<AppSpinner />}>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
    </Box>
  );
};

export default MainLayout;
