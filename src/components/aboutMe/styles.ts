import { styled } from '@mui/system';

export const Wrapper = styled('div')({});

export const CardContent = styled('div')({
  display: 'grid',
  height: 'fit-content',
  gridTemplateColumns:
    'repeat(auto-fit, minmax(319px, 1fr))',
  justifyItems: 'center',
  gap: '15px',
  margin: '20px 0px',
});
