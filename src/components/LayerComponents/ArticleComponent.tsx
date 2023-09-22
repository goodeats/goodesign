import { Article } from '#lib/main';
import React from 'react';

interface ArticleComponentProps {}

const ArticleComponent: React.FC<ArticleComponentProps> = () => {
  return (
    <Article>
      <h3>Article!</h3>
    </Article>
  );
};

export { ArticleComponent };
