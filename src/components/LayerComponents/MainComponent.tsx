import { Article, Main } from '#lib/main';
import React from 'react';

interface MainComponentProps {}

const MainComponent: React.FC<MainComponentProps> = () => {
  return (
    <Article>
      <h3>Main!</h3>
      <Main />
    </Article>
  );
};

export { MainComponent };
