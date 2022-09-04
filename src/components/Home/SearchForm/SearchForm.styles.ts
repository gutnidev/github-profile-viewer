import { TSxProps } from 'types';

export const SearchFormSx: TSxProps = {
  mainBox: {
    marginTop: '1.2rem',
    marginBottom: '1.2rem',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  input: {
    flexGrow: 1,
    '@media all and (max-width: 587px)': {
      width: '100%',
    },
  },
  button: {
    marginLeft: '1rem',
    '@media all and (max-width: 587px)': {
      marginLeft: '0',
      marginTop: '0.5rem',
    },
  },
};
