import { ReactNode } from 'react';
import { Container as MuiContainer } from '@mui/material';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <MuiContainer>{children}</MuiContainer>
);
