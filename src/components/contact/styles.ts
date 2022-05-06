import { styled } from '@mui/system';
import { Paper as MuiPaper } from '@mui/material';

export const Wrapper = styled('div')({});

export const TitleBox = styled('div')({
  padding: '20px 0px',
});

export const PaperBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '0px 0px 30px',
});

export const Paper = styled(MuiPaper)({
  width: '600px',
  height: 'fit-content',
  backgroundColor: '#f6ffff',
  borderRadius: '15px',
});

export const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '20px',
});

export const FormContent = styled('div')({});

export const TitlePaperBox = styled('div')({
  margin: '10px 0px',
});

export const IconsBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const EmailContent = styled('div')({
  marginTop: '40px',
});

export const TwoInputs = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const ButtonBox = styled('div')({
  marginTop: '16px',
});
