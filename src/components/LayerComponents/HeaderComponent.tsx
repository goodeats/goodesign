import { Article, Header } from '#lib/main';
import React from 'react';

interface HeaderComponentProps {}

const HeaderComponent: React.FC<HeaderComponentProps> = () => {
  return (
    <Article>
      <h3>Header!</h3>
      <Header />
    </Article>
  );
};

export { HeaderComponent };
