import { TSxProps } from 'types';

export const MainLayoutSx: TSxProps = {
  mainBox: {
    width: '100%',
    height: '100%',
    background: 'url("/images/background.png")',
    backgroundColor: '#323232ed',
    overflowY: 'auto',
  },
  mainContainer: {
    height: '100%',
    paddingTop: '3.5rem',
    paddingBottom: '0.5rem',
  },
  wrapperBox: {
    position: 'relative',
    minHeight: '100%',
    backgroundColor: '#f5f5f5',
    padding: '2rem 6.5rem 0 6.5rem',
    '@media all and (max-width: 630px)': {
      padding: '2rem 3.5rem 0px 3.5rem',
    },
    '@media all and (max-width: 445px)': {
      padding: '2rem 1.5rem 0px 1.5rem',
    },
  },
};
