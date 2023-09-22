import { Header } from '#lib/main';
import React from 'react';

interface HeaderComponentProps {}

const HeaderComponent: React.FC<HeaderComponentProps> = () => {
  return (
    <div>
      <h3>Header!</h3>
      <Header />
    </div>
  );
};

export { HeaderComponent };
