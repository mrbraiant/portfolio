import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';

import {
  LayoutContent,
  LogoBox,
  TitleBox,
  HeaderMobileGroup,
  Wrapper,
} from './styles';
import { Logo } from '@components/logo';
import { Text } from '@components/text';
import { navbarItems } from '@utils/constants/navbar';
import { theme } from '@styles/theme';
import { Footer } from './footer';
import { Header } from './header';
import { NavbarMobile } from './navbar/navbarMobile';

type LayoutProps = {
  children?: ReactNode;
  image?: string;
  title?: string;
  mobileHeight?: '300px' | '200px';
  height?: '630px' | '350px';
  boxShadow?: string;
  objectFit?:
    | 'fill'
    | 'contain'
    | 'cover'
    | 'none'
    | 'scale-down';
  headers?: {
    link: string;
    text: string;
  }[];
};

export const Layout = ({
  children,
  image,
  title,
  mobileHeight = '300px',
  height = '630px',
  boxShadow,
  objectFit = 'fill',
  headers,
}: LayoutProps) => {
  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );
  const Router = useRouter();
  return (
    <Wrapper>
      {isMobileVersion ? (
        <HeaderMobileGroup>
          <LogoBox>
            <Logo
              url="/bdev.png"
              style={{ width: '100px', height: '80px' }}
              onClick={() => Router.push('/')}
            />
          </LogoBox>
          <NavbarMobile />
        </HeaderMobileGroup>
      ) : (
        <Header items={headers ? headers : navbarItems} />
      )}
      <LayoutContent>
        {image ? (
          <Logo
            url={`${image}`}
            style={{
              width: '100%',
              height: isMobileVersion
                ? mobileHeight
                : height,
              objectFit: objectFit,
              overflowX: 'hidden',
              boxShadow: boxShadow ? boxShadow : null,
            }}
          />
        ) : null}

        {title ? (
          <TitleBox>
            <Text type="h4" textAlign="center">
              {title}
            </Text>
          </TitleBox>
        ) : null}

        {children}
      </LayoutContent>
      <Footer />
    </Wrapper>
  );
};
