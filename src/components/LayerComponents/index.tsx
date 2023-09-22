import React from 'react';
import { FlexComponent } from './FlexComponent';

interface LayerProps {}

const LayerComponents: React.FC<LayerProps> = () => {
  return (
    <div>
      <h2>LayerComponents!</h2>
      <FlexComponent />
    </div>
  );
};

export { LayerComponents };
