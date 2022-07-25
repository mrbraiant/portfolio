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
              Experiences
            </Text>
          </TitleBox>
          {/* <Text>
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
          </Text> */}
          <Text>
            {`I work as a Web Developer, in the Front-End
            team, with React, Next and Angular and I've been
            updating more and more about Fullstack with Next
            for almost a year. My routine is consuming APIs,
            integrating front-end applications to back-end,
            using Single Page Architecture to create apps
            with responsive layouts as well, solving bugs, researching
            solutions in the original documentations, tutorials, forums
            and participating in several
            simultaneous projects from the beginning stages of
            development until the final delivery.`}
          </Text>
          <br />
          <Text>
            {/* Meu foco de estudos é na área Fullstack em
            TypeScript/JavaScript com React/Angular/Next e
            Node/Express para então em breve seguir com mais
            estudos rumo ao Full Cycle. */}
            My focus is continuing to learn about Fullstack
            with TypeScript/JavaScript and
            React/Next/Angular and Node/Express to join in
            FullCycle course and learn about multiservices
            and scalable applications.
          </Text>
          <br />
          <Text>
            {/* Minha primeira experiência como Dev, muito antes
            disso, foi uma implementação que fiz em PHP de
            free lance, onde adicionei um iFrame do Youtube
            em uma pagina de uma empresa, automatizei a
            forma de transformar qualquer link do Youtube em
            um link preparado pra ser visualizado na página
            principal de forma personalizada, oferecendo
            maior conforto ao usuário em inserir qualquer
            link e não impedir nem comprometer o
            funcionamento da página. */}
            My first experience as a Dev, long before that,
            was one that I did in PHP as freelance, where I
            added a Youtube iFrame on a main company page,
            automated the way to transform any Youtube link
            into a link prepared to be embed on main page in
            a personalized way, greater comfort to the user
            in inserting any link and not preventing or
            compromising the functioning of the page.
          </Text>
          <Text type="caption">
            <em>
              You can check the code inside my repository:{' '}
            </em>
            {/* <em>Você pode visualizar no repositório: </em> */}
            <Link href="https://github.com/mrbraiant/phpImplements/blob/main/IfConditionYoutubeSolution.php">
              repository link
            </Link>
          </Text>
        </ContentBox>
      </Container>
    </Wrapper>
  );
};
