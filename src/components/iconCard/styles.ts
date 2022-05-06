import { styled } from '@mui/system';
import { Card as MuiCard } from '@mui/material';

export const Wrapper = styled('div')({});

export const Card = styled(MuiCard)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '55px',
  width: '55px',
  borderRadius: '25px',
  backgroundColor: '#f6ffff',
  // backgroundColor: '#ddffff',
});

export const IconImage = styled('img')({});
