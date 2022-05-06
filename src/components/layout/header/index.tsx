import { Container } from '@components/container';
import { Logo } from '@components/logo';
import { Text } from '@components/text';
import { Link } from '@mui/material';
import { useRouter } from 'next/router';
import {
  HeaderContent,
  ItemList,
  Item,
  Wrapper,
  LogoBox,
  ItemBox,
  NavbarContent,
} from './styles';

type HeaderProps = {
  items: {
    text: string;
    link: string;
  }[];
};

export const Header = ({ items }: HeaderProps) => {
  const router = useRouter();
  return (
    <Wrapper>
      <HeaderContent>
        <Container>
          <NavbarContent>
            <LogoBox>
              <Logo
                url="/bdev.png"
                style={{ width: '100px', height: '80px' }}
                onClick={() => router.push('/')}
              />
            </LogoBox>
            <ItemBox>
              <ItemList>
                {items.map((item, index) => (
                  <Item key={index}>
                    <Link
                      underline="none"
                      key="1"
                      href={item.link}
                    >
                      <Text
                        type="body1"
                        style={{
                          color: 'white',
                        }}
                      >
                        {item.text}
                      </Text>
                    </Link>
                  </Item>
                ))}
              </ItemList>
            </ItemBox>
          </NavbarContent>
        </Container>
      </HeaderContent>
    </Wrapper>
  );
};
