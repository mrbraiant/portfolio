import { Container } from '@components/container';
import { IconCard } from '@components/iconCard';
import { Text } from '@components/text';
import { TextIntro } from '@components/textIntro';
import { MainDesignLibs } from '@utils/constants/skills/mainDesignLibs';
import { MainLanguages } from '@utils/constants/skills/mainLanguages';
import { MainLibs } from '@utils/constants/skills/mainLibs';
import { ProductionLanguages } from '@utils/constants/skills/productionLanguages';
import {
  AlignBox,
  Content,
  IconsBox,
  IconsSmallBox,
  TitleBox,
  Wrapper,
} from './styles';

export const Home = () => {
  return (
    <Wrapper>
      <TextIntro />
      <Container>
        <Content>
          <TitleBox>
            <Text type="h5" textAlign="center">
              Main Languages
            </Text>
          </TitleBox>
          <IconsBox>
            {MainLanguages.map((language, index) => (
              <IconCard
                key={index}
                title={language.title}
                imageAlt={language.imageAlt}
                image={language.image}
              />
            ))}
          </IconsBox>

          <TitleBox>
            <Text type="h5" textAlign="center">
              Main Technologies
            </Text>
          </TitleBox>
          <AlignBox>
            <IconsSmallBox>
              {MainLibs.map((lib, index) => (
                <IconCard
                  key={index}
                  title={lib.title}
                  imageAlt={lib.imageAlt}
                  image={lib.image}
                />
              ))}
            </IconsSmallBox>
          </AlignBox>

          <TitleBox>
            <Text type="h5" textAlign="center">
              Main Libraries and Styling Frameworks
            </Text>
          </TitleBox>
          <AlignBox>
            <IconsSmallBox>
              {MainDesignLibs.map((designLib, index) => (
                <IconCard
                  key={index}
                  title={designLib.title}
                  imageAlt={designLib.imageAlt}
                  image={designLib.image}
                />
              ))}
            </IconsSmallBox>
          </AlignBox>

          <TitleBox>
            <Text type="h5" textAlign="center">
              Production Languages
            </Text>
          </TitleBox>
          <AlignBox>
            <IconsSmallBox>
              {ProductionLanguages.map(
                (propdLang, index) => (
                  <IconCard
                    key={index}
                    title={propdLang.title}
                    imageAlt={propdLang.imageAlt}
                    image={propdLang.image}
                  />
                ),
              )}
            </IconsSmallBox>
          </AlignBox>
        </Content>
      </Container>
    </Wrapper>
  );
};
