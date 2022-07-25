import { Layout } from '@components/layout';
import { Home } from '@components/home';

export const HomeTemplate = () => {
  return (
    <Layout
      image="/background-coding-05.png"
      title="My Skills"
    >
      <Home />
    </Layout>
  );
};
