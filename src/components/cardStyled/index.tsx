import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { Text } from '@components/text';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Card, Wrapper } from './styles';
import { AppRouters } from '@utils/constants/appRouters';

type CardStyledProps = {
  id?: number;
  image?: string;
  imageAlt?: string;
  title?: string;
  children?: ReactNode;
};

export const CardStyled = ({
  id,
  image = '/background.png',
  imageAlt = 'background name',
  title = 'Título do Card',
  children,
}: CardStyledProps) => {
  const Router = useRouter();
  return (
    <Wrapper>
      <Card variant="elevation">
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt={imageAlt}
          // style={{
          //   backgroundRepeat: 'no-repeat',
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
        />
        <CardContent>
          <Text type="h6">{title}</Text>
          <Text type="body1" style={{ height: '100px' }}>
            {String(children).length > 120
              ? String(children).substring(0, 120) + '...'
              : children}
          </Text>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            style={{ borderRadius: '20px' }}
            onClick={() =>
              Router.push(`${AppRouters.aboutMe}/${id}`)
            }
          >
            Read more
          </Button>
        </CardActions>
      </Card>
    </Wrapper>
  );
};
