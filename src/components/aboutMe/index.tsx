import { CardContent, Wrapper } from './styles';
import { ArticlesList } from '@utils/constants/articles';
import { CardStyled } from '@components/cardStyled';
import { Container } from '@components/container';

export const AboutMe = () => {
  return (
    <Wrapper>
      <Container>
        <CardContent>
          {ArticlesList.map((journey, index) => (
            <CardStyled
              id={journey.id}
              key={index}
              title={journey.title}
              image={journey.image}
              imageAlt={journey.imageAlt}
            >
              {journey.introText}
            </CardStyled>
          ))}
        </CardContent>
      </Container>
    </Wrapper>
  );
};
