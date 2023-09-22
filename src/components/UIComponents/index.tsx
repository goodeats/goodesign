import React from 'react';
import { ButtonComponent } from './ButtonComponent';
import { Section } from '#lib/main';

interface UiComponentsProps {}

const UiComponents: React.FC<UiComponentsProps> = () => {
  return (
    <Section>
      <h2>UiComponents!</h2>
      <ButtonComponent />
    </Section>
  );
};

export { UiComponents };
