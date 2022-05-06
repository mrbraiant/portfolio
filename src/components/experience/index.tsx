import { Container } from '@components/container';
import { Text } from '@components/text';
import { Link } from '@mui/material';
import { TitleBox, Wrapper, ContentBox } from './styles';

export const Experience = () => {
  return (
    <Wrapper>
      <Container>
        <ContentBox>
          <TitleBox>
            <Text type="h4" textAlign="center">
              Experiências
            </Text>
          </TitleBox>
          <Text>
            Trabalho como Desenvolvedor Web, na área de
            Front-End, com React, Next e Angular e
            aprendendo cada vez mais sobre Fullstack com
            Next há quase um ano. Minha rotina de trabalho
            resume em concluir várias tarefas diárias com
            prazos pré-definidos, resolvendo bugs,
            desenvolvendo layouts responsivos e participando
            de vários projetos simultâneos desde seus
            primeiros estágios de desenvolvimento.
          </Text>
          <br />
          <Text>
            Meu foco de aprendizado é ser Fullstack em
            TypeScript/JavaScript com React/Angular/Next e
            Node para então seguir rumo ao Full Cycle.
          </Text>
          <br />
          <Text>
            Minha primeira experiência como Dev, muito antes
            disso, foi uma implementação que fiz em PHP de
            free lance, onde adicionei um iFrame do Youtube
            em uma pagina de uma empresa, automatizei a
            forma de transformar qualquer link do Youtube em
            um link preparado pra ser visualizado na página
            principal de forma personalizada, oferecendo
            maior conforto ao usuário em inserir qualquer
            link e não impedir nem comprometer o
            funcionamento da página.
          </Text>
          <Text type="caption">
            <i>Você pode visualizar no repositório: </i>
            <Link href="https://github.com/mrbraiant/phpImplements/blob/main/IfConditionYoutubeSolution.php">
              link do repositório
            </Link>
          </Text>
        </ContentBox>
      </Container>
    </Wrapper>
  );
};
