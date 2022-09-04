import { Box, Button, TextField } from '@mui/material';
import { FC, FormEvent, useState } from 'react';
import { SearchFormSx } from './SearchForm.styles';

interface Props {
  onFormSubmit: (searchValue: string) => void;
}

const SearchForm: FC<Props> = ({ onFormSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // ! handlers
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) {
      setErrorMessage('Field should not be empty');
      return;
    }
    onFormSubmit(inputValue);
  };
  const onInputFocus = () => setErrorMessage('');

  // ! render
  return (
    <Box
      onSubmit={submitHandler}
      component="form"
      sx={SearchFormSx.mainBox}
    >
      <TextField
        autoFocus
        variant="outlined"
        placeholder="Enter Github username"
        sx={SearchFormSx.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        error={!!errorMessage}
        helperText={errorMessage}
        onFocus={onInputFocus}
      />
      <Button
        type="submit"
        variant="contained"
        sx={SearchFormSx.button}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchForm;
