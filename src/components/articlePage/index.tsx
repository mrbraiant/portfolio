import { IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import {
  Wrapper,
  TitleBox,
  ContentBox,
  TextBox,
  VideoBox,
  FooterButtonBox,
  ImageBox,
} from './styles';
import { CertificationList } from '@components/certification/list';
import { Text } from '@components/text';
import { Logo } from '@components/logo';
import { Container } from '@components/container';

import { Article } from '@utils/types/article';
import { AppRouters } from '@utils/constants/appRouters';
import { useRouter } from 'next/router';
import { theme } from '@styles/theme';

type ArticleProps = {
  id: number;
  article: Article;
};

export const ArticlePage = ({
  id,
  article,
}: ArticleProps) => {
  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );
  const Router = useRouter();
  const articleInfo = article[0];

  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <Logo
            url={`${articleInfo?.image}`}
            style={{
              width: '100%',
              height: isMobileVersion ? '200px' : '350px',
              objectFit: 'cover ',
              overflowX: 'hidden',
              borderRadius: '25px',
              boxShadow: '5px 5px 5px black',
            }}
          />
        </ImageBox>
        <ContentBox key={id}>
          <TitleBox>
            <Text type="h4" textAlign="center">
              {articleInfo?.title}
            </Text>
          </TitleBox>
          <TextBox>
            <Text textAlign="center">
              {articleInfo?.text}
            </Text>
          </TextBox>
          {articleInfo?.video ? (
            <VideoBox>
              <iframe
                width="100%"
                height="315"
                src={`${articleInfo?.video}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoBox>
          ) : null}

          {articleInfo?.certifications
            ? articleInfo?.certifications.map(
                (certification) => (
                  <CertificationList
                    key={certification?.id}
                    title={certification?.title}
                  />
                ),
              )
            : null}
          <FooterButtonBox>
            <IconButton
              onClick={() =>
                Router.push(AppRouters.aboutMe)
              }
            >
              <ArrowBackIosIcon />
            </IconButton>
          </FooterButtonBox>
        </ContentBox>
      </Container>
    </Wrapper>
  );
};
