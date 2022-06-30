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
            Olá, eu sou
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
          Desenvolvimento Web - Com foco em desenvolvimento
          de sites, Apps e sistemas responsivos utilizando
          React, Next ou Angular.
        </Text>
      </TextBox>
    </Wrapper>
  );
};
