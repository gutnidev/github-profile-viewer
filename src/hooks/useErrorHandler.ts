import { AxiosError } from 'axios';
import { isAxiosError } from 'utils/isAxiosError';
import { useSnackbar } from 'notistack';

const getErrorMessage = (error: Error | AxiosError) => {
  const isAxios = isAxiosError(error);
  if (!isAxios) return error.message;

  const status = error.response?.status;
  if (status === 404) return 'User Not Found';

  // @ts-ignore
  return error.response?.data?.message || error.message;
};

export const useErrorHandler = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleError = (error: Error | AxiosError) => {
    const snackKey = Date.now();
    const message = getErrorMessage(error);
    enqueueSnackbar(message, {
      title: 'Error',
      variant: 'error',
      key: snackKey,
      onClick: () => closeSnackbar(snackKey),
      autoHideDuration: 2000,
    });
  };

  return { handleError };
};
