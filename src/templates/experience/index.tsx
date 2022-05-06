import { Layout } from '@components/layout';
import { Experience } from '@components/experience';

export const ExperienceTemplate = () => {
  return (
    <Layout
      image="/img1.png"
      height="350px"
      objectFit="cover"
      boxShadow="3px 3px 5px black"
    >
      <Experience />
    </Layout>
  );
};
