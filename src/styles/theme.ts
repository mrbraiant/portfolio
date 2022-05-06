import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const theme = createTheme({
  typography: {
    h4: {
      fontSize: '34px',
    },
    subtitle1: {
      fontSize: '16px',
    },
  },
});

export const dataGridStyles = makeStyles({
  root: {
    '& div[data-rowIndex][role="row"]:nth-of-type(1n)': {
      backgroundColor: '#FFFFFF',
    },
    '& div.MuiDataGrid-columnHeadersInner': {
      backgroundColor: '#FFFFFF',
    },
  },
});
