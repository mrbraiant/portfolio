import { styled } from '@mui/system';

export const Wrapper = styled('div')({});

export const HeaderContent = styled('div')({
  position: 'fixed',
  top: 0,
  display: 'flex',
  height: '80px',
  width: '100%',
  opacity: 0.9,
  zIndex: 5,
  // backgroundColor: '#ceffed',
  backgroundColor: '#34879f',
});

export const NavbarContent = styled('div')({
  display: 'flex',
});

export const LogoBox = styled('div')({
  display: 'flex',
  flex: 0.5,
  justifyContent: 'start',
});

export const ItemBox = styled('div')({
  display: 'flex',
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'end',
});

export const ItemList = styled('div')({
  display: 'flex',
});

export const Item = styled('span')({
  color: 'white',
  padding: '0 1.5rem',
  cursor: 'pointer',
  textAlign: 'center',
  transition: '0.2s all',
});
