import { ArticlePage } from '@components/articlePage';
import { Layout } from '@components/layout';
import { Article } from '@utils/types/article';

type ArticleTemplateProps = {
  id: number;
  article: Article;
};

export const ArticlePageTemplate = ({
  id,
  article,
}: ArticleTemplateProps) => {
  return (
    <Layout>
      <ArticlePage id={id} article={article} />
    </Layout>
  );
};
