import { Text } from '@components/text';
import { useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';
import { TitleBox, TextBox, Wrapper } from './styles';

export const TextIntro = () => {
  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );
  return (
    <Wrapper>
      <TextBox>
        <TitleBox>
          <Text
            type={isMobileVersion ? 'h6' : 'h4'}
            style={{ color: '#c5dae1' }}
          >
            Hello, I am
          </Text>
        </TitleBox>
        <Text
          type={isMobileVersion ? 'h4' : 'h2'}
          style={{ color: '#f1f1f1' }}
        >
          Braiant Malta
        </Text>
        <TitleBox>
          <Text
            type={isMobileVersion ? 'h6' : 'h4'}
            style={{ color: '#c5dae1' }}
          >
            Front-End Developer
          </Text>
        </TitleBox>
        <Text
          type={isMobileVersion ? 'body2' : 'h5'}
          style={{ color: '#f1f1f1' }}
        >
          Web Developer - focused on creating responsive
          Landing Pages, personalized and unique
          Systems/Dashboards, Web Apps, using and consuming
          RESTful APIs, React, Next or Angular.
        </Text>
        {/* <Text
          type={isMobileVersion ? 'body2' : 'h5'}
          style={{ color: '#f1f1f1' }}
        >
          Web Developer - Com foco em desenvolvimento
          de sites, Web Apps, sistemas responsivos e
          consumos de APIs utilizando React, Next ou
          Angular.
        </Text> */}
      </TextBox>
    </Wrapper>
  );
};
