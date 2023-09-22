import React from 'react';
import { LayerComponents } from './LayerComponents';
import { UiComponents } from './UIComponents';

interface ComponentsProps {}

const Components: React.FC<ComponentsProps> = () => {
  return (
    <div className="w-full">
      <h2>Components!</h2>
      <hr />
      <LayerComponents />
      <hr />
      <UiComponents />
    </div>
  );
};

export { Components };
