import { useRouter } from 'next/router';
import { ArticlePageTemplate } from '@templates/articlePage';
import { ArticlesList } from '@utils/constants/articles';

export default function ArticlePage() {
  const Router = useRouter();
  const { id } = Router.query;

  const article = ArticlesList.filter(
    (article) => article.id === Number(id),
  );

  return (
    <ArticlePageTemplate
      id={Number(id)}
      article={article}
    />
  );
}
