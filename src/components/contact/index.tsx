import { useState } from 'react';
import axios from 'axios';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

import {
  PaperBox,
  Paper,
  Content,
  TitleBox,
  Wrapper,
  TwoInputs,
  IconsBox,
  TitlePaperBox,
  EmailContent,
  ButtonBox,
  FormContent,
} from './styles';
import { Container } from '@components/container';
import { StyledInput } from '@components/input/styledInput';
import { Text } from '@components/text';
import { Alert } from '@components/alert';
import { ButtonLoading } from '@components/buttonLoading';

type ContactInput = {
  name: string;
  email: string;
  description: string;
};

const schema = Yup.object().shape({
  name: Yup.string().required('Digite seu nome'),
  email: Yup.string()
    .email('Formato inválido de email')
    .required('Digite seu email'),
  description: Yup.string().required(
    'Digite o conteúdo do email',
  ),
});

export const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: ContactInput) => {
    setLoading(true);
    try {
      await axios.post('/api/contact', values, {
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type':
            'multipart/form-data, application/json',
        },
      });
      Alert({
        icon: 'success',
        title: 'Sucesso',
        text: 'Email enviado com sucesso! Obrigado pelo entrar em contato. Em breve responderei seu email!',
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <TitleBox>
          <Text type="h4" textAlign="center">
            Meus Contatos
          </Text>
        </TitleBox>
        <PaperBox>
          <Paper elevation={3}>
            <Content>
              <TitlePaperBox>
                <Text type="h4" textAlign="center">
                  Redes Sociais
                </Text>
              </TitlePaperBox>
              <IconsBox>
                <Link
                  href="https://www.linkedin.com/in/braiant-malta-924529210/"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  <LinkedInIcon
                    style={{
                      color: '#0077b5',
                      height: '40px',
                      width: '40px',
                    }}
                  />
                </Link>
                <Link
                  href="https://github.com/mrbraiant"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  <GitHubIcon
                    style={{
                      color: '#333',
                      height: '40px',
                      width: '40px',
                    }}
                  />
                </Link>
              </IconsBox>
              <Formik
                initialValues={{} as ContactInput}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
                validationSchema={schema}
              >
                {({ errors, handleChange }) => (
                  <Form>
                    <FormContent>
                      <EmailContent>
                        <Text type="h5" textAlign="center">
                          E-mail
                        </Text>
                        <TwoInputs>
                          <StyledInput
                            name="name"
                            label="Nome"
                            margin="normal"
                            type="text"
                            onChange={handleChange}
                            helperText={errors.name}
                            fullWidth
                            required
                          />
                          <StyledInput
                            name="email"
                            label="E-mail"
                            margin="normal"
                            type="email"
                            onChange={handleChange}
                            helperText={errors.email}
                            fullWidth
                            required
                          />
                        </TwoInputs>
                        <StyledInput
                          name="description"
                          label="Descrição"
                          margin="normal"
                          type="text"
                          onChange={handleChange}
                          helperText={errors.description}
                          multiline
                          fullWidth
                          rows={4}
                        />
                      </EmailContent>
                      <ButtonBox>
                        <ButtonLoading
                          loading={loading}
                          type="submit"
                          variant="contained"
                          fullWidth
                        >
                          ENVIAR
                        </ButtonLoading>
                      </ButtonBox>
                    </FormContent>
                  </Form>
                )}
              </Formik>
            </Content>
          </Paper>
        </PaperBox>
      </Container>
    </Wrapper>
  );
};
