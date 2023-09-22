import { Main } from '#lib/main';
import React from 'react';

interface MainComponentProps {}

const MainComponent: React.FC<MainComponentProps> = () => {
  return (
    <div>
      <h3>Main!</h3>
      <Main />
    </div>
  );
};

export { MainComponent };
