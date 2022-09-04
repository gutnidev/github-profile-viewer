import { TSxProps } from 'types';

export const AppTitleSx: TSxProps = {
  title: {
    fontSize: 38,
    '@media all and (max-width: 730px)': {
      fontSize: 30,
    },
    '@media all and (max-width: 530px)': {
      fontSize: 24,
    },
  },
};
