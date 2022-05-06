import { styled } from '@mui/system';

export const Wrapper = styled('div')({});

export const ImageBox = styled('div')({
  padding: '60px 0px 0px',
});

export const TitleBox = styled('div')({
  margin: '20px 0px',
});

export const TextBox = styled('div')(({ theme }) => ({
  display: 'flex',
  margin: 'auto',
  padding: '0px 0px 20px 0px',
  width: '600px',
  [theme.breakpoints.down('sm')]: {
    width: '250px',
  },
}));

export const VideoBox = styled('div')(({ theme }) => ({
  display: 'flex',
  margin: '20px auto',
  // width: '600px',
  width: '100%',
  borderRadius: '25px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const CertificationBox = styled('div')({
  display: 'flex',
});

export const ContentBox = styled('div')({
  marginBottom: '20px',
});

export const FooterButtonBox = styled('div')({
  display: 'flex',
  padding: '20px 0px 0px',
  justifyContent: 'center',
});
