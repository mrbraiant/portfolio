import { Card, IconImage, Wrapper } from './styles';

type IconCardProps = {
  image?: string;
  imageAlt?: string;
  title?: string;
};

export const IconCard = ({
  image,
  imageAlt,
  title,
}: IconCardProps) => {
  return (
    <Wrapper>
      <Card
        style={{
          boxShadow: '2px 2px 2px 1px #888',
        }}
      >
        <IconImage
          title={title}
          src={image}
          alt={imageAlt}
          height="45px"
          width="45px"
        />
        {/* <Text type="h5">{title}</Text> */}
      </Card>
    </Wrapper>
  );
};
