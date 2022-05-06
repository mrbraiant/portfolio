import { styled } from '@mui/system';
import { Paper as MuiPaper } from '@mui/material';

export const CertificationBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const Paper = styled(MuiPaper)({
  borderRadius: '0px',
  width: '600px',
  backgroundColor: '#f6ffff',
});

export const TextBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});
