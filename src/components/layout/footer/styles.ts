import { styled } from '@mui/material';

export const Wrapper = styled('div')({});

export const FooterStyled = styled('div')({
  display: 'flex',
  height: '80px',
  width: '100%',
  alignItems: 'center',
  // backgroundColor: '#9cccbb',
  backgroundColor: '#69b7d0',
});

export const FooterContent = styled('div')({
  display: 'flex',
});

export const RightBox = styled('div')({
  display: 'flex',
  flex: '0.5',
  justifyContent: 'flex-end',
});

export const IconsBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const IconText = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
});

export const LeftBox = styled('div')({
  display: 'flex',
  flex: '0.5',
  alignItems: 'center',
  justifyContent: 'start',
});
