import { styled } from '@mui/system';

export const Wrapper = styled('div')({});

export const TitleBox = styled('div')({
  margin: '20px 0px',
});

export const Content = styled('div')({
  margin: '40px 0px',
});

export const IconsBox = styled('div')({
  display: 'grid',
  gridTemplateColumns:
    'repeat(auto-fit, minmax(55px, 1fr))',
  justifyItems: 'center',
  gap: '10px',
});

export const AlignBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const IconsSmallBox = styled('div')({
  // display: 'grid',
  display: 'flex',
  justifyContent: 'center',
  width: '350px',
  // gridTemplateColumns:
  //   'repeat(auto-fit, minmax(55px, 1fr))',
  gap: '40px',
  margin: 'auto',
});
