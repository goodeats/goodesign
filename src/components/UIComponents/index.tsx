import React from 'react';
import { ButtonComponent } from './ButtonComponent';

interface UiComponentsProps {}

const UiComponents: React.FC<UiComponentsProps> = () => {
  return (
    <div>
      <h2>UiComponents!</h2>
      <ButtonComponent />
    </div>
  );
};

export { UiComponents };
