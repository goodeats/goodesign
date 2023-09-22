import React from 'react';
import { FlexComponent } from './FlexComponent';
import { HeaderComponent } from './HeaderComponent';

interface LayerProps {}

const LayerComponents: React.FC<LayerProps> = () => {
  return (
    <div>
      <h2>LayerComponents!</h2>
      <FlexComponent />
      <HeaderComponent />
    </div>
  );
};

export { LayerComponents };
