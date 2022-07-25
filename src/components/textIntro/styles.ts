import { styled } from '@mui/system';

export const Wrapper = styled('div')({});

export const TextBox = styled('div')(({ theme }) => ({
  height: '100vh',
  maxWidth: '800px',
  width: '100%',
  position: 'absolute',
  padding: '50px',
  top: 80,
  left: 0,
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
  },
}));

export const TitleBox = styled('div')(({ theme }) => ({
  marginBottom: '30px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '20px',
  },
}));
