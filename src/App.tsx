import { useMemo, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { APP_ROUTES } from 'routes';
import { AppContext } from 'context';
import { IUser } from 'types';
import { theme } from 'theme';
import { SnackbarProvider } from 'notistack';
import { CssBaseline, ThemeProvider } from '@mui/material';

const App = () => {
  const appRoutes = useRoutes(APP_ROUTES);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // ! memos
  const contextValue = useMemo(() => ({
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
  }), [currentUser, loading]);

  // ! render
  return (
    <AppContext.Provider value={contextValue}>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {appRoutes}
        </ThemeProvider>
      </SnackbarProvider>
    </AppContext.Provider>
  );
};

export default App;
