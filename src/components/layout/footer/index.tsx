import { Container } from '@components/container';
import { Text } from '@components/text';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import {
  Wrapper,
  FooterContent,
  FooterStyled,
  IconsBox,
  IconText,
  LeftBox,
  RightBox,
} from './styles';
import { Link } from '@mui/material';

export const Footer = () => {
  return (
    <Wrapper>
      <FooterStyled>
        <Container>
          <FooterContent>
            <LeftBox>
              <Text type="body1">Braioso Dev®</Text>
            </LeftBox>
            <RightBox>
              <IconsBox>
                <IconText>
                  <LinkedInIcon style={{ color: 'blue' }} />
                  <Link
                    href="https://www.linkedin.com/in/braiant-malta-924529210/"
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                  >
                    <Text
                      type="caption"
                      style={{ color: 'black' }}
                    >
                      @braiantmalta
                    </Text>
                  </Link>
                </IconText>
                <IconText>
                  <GitHubIcon style={{}} />
                  <Link
                    href="https://github.com/mrbraiant"
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                  >
                    <Text
                      type="caption"
                      style={{ color: 'black' }}
                    >
                      @mrbraiant
                    </Text>
                  </Link>
                </IconText>
              </IconsBox>
            </RightBox>
          </FooterContent>
        </Container>
      </FooterStyled>
    </Wrapper>
  );
};
