import { FC } from 'react';
import AppTitle from 'components/common/AppTitle';
import { Avatar } from '@mui/material';
import { ResumeHeaderSx } from './ResumeHeader.styles';

interface Props {
  avatarSrc: string;
  titleText: string;
}

const ResumeHeader: FC<Props> = ({ avatarSrc, titleText }) => (
  <>
    <Avatar
      sx={ResumeHeaderSx.avatar}
      alt="Avatar"
      src={avatarSrc}
    >
      {titleText[0].toUpperCase()}
    </Avatar>
    <AppTitle text={titleText} />
  </>
);

export default ResumeHeader;
