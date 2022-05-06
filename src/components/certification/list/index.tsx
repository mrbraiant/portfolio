import { Text } from '@components/text';
import { Grid } from '@mui/material';
import { CertificationBox, Paper, TextBox } from './styles';
import DoneIcon from '@mui/icons-material/Done';

type CertificationListProps = {
  key: number;
  title: string;
};

export const CertificationList = ({
  key,
  title,
}: CertificationListProps) => {
  return (
    <CertificationBox key={key}>
      <Paper elevation={3}>
        <Grid item xs={12} md={6}>
          <TextBox>
            <DoneIcon
              style={{
                color: '#34879f',
                marginRight: '12px',
              }}
            />
            <Text type="body1">{title}</Text>
          </TextBox>
        </Grid>
      </Paper>
    </CertificationBox>
  );
};
