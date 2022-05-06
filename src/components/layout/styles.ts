import { styled } from '@mui/system';

export const Wrapper = styled('div')({
  backgroundColor: '#F1F1F1',
});

export const HeaderMobileGroup = styled('div')({
  position: 'fixed',
  top: 0,
  display: 'flex',
  height: '80px',
  width: '100%',
  opacity: 0.9,
  zIndex: 5,
  backgroundColor: '#34879f',
  justifyContent: 'space-between',
});

export const LayoutContent = styled('div')({
  marginTop: '80px',
});

export const LogoBox = styled('div')({
  display: 'flex',
  flex: 0.5,
  justifyContent: 'start',
});

export const TitleBox = styled('div')({
  margin: '20px 0px',
});
