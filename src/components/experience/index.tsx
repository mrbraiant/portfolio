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
            Front-End, com React, Next e Angular e estou
            aprendendo cada vez mais sobre Fullstack com
            Next há quase um ano. Minha rotina de trabalho
            se resume em consumir APIs, integrá-las ao front
            end, desenvolvendo Web Apps com arquitetura
            <em> Single Page Application</em> com layouts
            responsivos, bem como concluir e corrigir várias
            tarefas diárias com prazos pré-definidos,
            resolvendo bugs, pesquisando soluções nas
            documentações, fórums e tutoriais em Inglês,
            buscando as melhores formas de lidar com o
            problema, entendendo-o e evitando gambiarras,
            participando de vários projetos simultâneos
            desde seus primeiros estágios de
            desenvolvimento.
          </Text>
          <br />
          <Text>
            Meu foco de estudos é na área Fullstack em
            TypeScript/JavaScript com React/Angular/Next e
            Node/Express para então em breve seguir com mais
            estudos rumo ao Full Cycle.
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
            <em>Você pode visualizar no repositório: </em>
            <Link href="https://github.com/mrbraiant/phpImplements/blob/main/IfConditionYoutubeSolution.php">
              link do repositório
            </Link>
          </Text>
        </ContentBox>
      </Container>
    </Wrapper>
  );
};
