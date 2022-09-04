import { TSxProps } from '../../../types';

export const EmptySearchedUsersSx: TSxProps = {
  svgWrap: {
    width: '100%',
    height: '100%',
    '& svg': {
      width: '500px',
      height: '300px',
      '@media all and (max-width: 630px)': {
        width: '450px',
        height: '300px',
      },
      '@media all and (max-width: 570px)': {
        width: '400px',
        height: '300px',
      },
      '@media all and (max-width: 520px)': {
        width: '350px',
        height: '250px',
      },
      '@media all and (max-width: 470px)': {
        width: '300px',
        height: '200px',
      },
    },
  },
};
