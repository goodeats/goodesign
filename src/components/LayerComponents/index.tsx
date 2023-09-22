import React from 'react';
import { FlexComponent } from './FlexComponent';
import { HeaderComponent } from './HeaderComponent';
import { NavComponent } from './NavComponent';
import { MainComponent } from './MainComponent';

interface LayerProps {}

const LayerComponents: React.FC<LayerProps> = () => {
  return (
    <div>
      <h2>LayerComponents!</h2>
      <FlexComponent />
      <HeaderComponent />
      <NavComponent />
      <MainComponent />
    </div>
  );
};

export { LayerComponents };
