import { Article, Nav } from '#lib/main';
import React from 'react';

interface NavComponentProps {}

const NavComponent: React.FC<NavComponentProps> = () => {
  return (
    <Article>
      <h3>Nav!</h3>
      <Nav />
    </Article>
  );
};

export { NavComponent };
