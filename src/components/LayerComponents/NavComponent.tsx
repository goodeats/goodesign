import { Nav } from '#lib/main';
import React from 'react';

interface NavComponentProps {}

const NavComponent: React.FC<NavComponentProps> = () => {
  return (
    <div>
      <h3>Nav!</h3>
      <Nav />
    </div>
  );
};

export { NavComponent };
