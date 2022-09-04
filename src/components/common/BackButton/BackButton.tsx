import { FC } from 'react';
import { Button } from '@mui/material';
import { BackButtonSx } from './BackButton.styles';

interface Props {
  onClick: () => void;
}

const BackButton: FC<Props> = ({ onClick }) => (
  <Button
    variant="outlined"
    size="small"
    sx={BackButtonSx.button}
    onClick={onClick}
  >
    {'<'}
    {' '}
    back
  </Button>
);

export default BackButton;
