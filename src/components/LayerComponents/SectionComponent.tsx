import { Section } from '#lib/main';
import React from 'react';

interface SectionComponentProps {}

const SectionComponent: React.FC<SectionComponentProps> = () => {
  return (
    <Section>
      <h3>Section!</h3>
    </Section>
  );
};

export { SectionComponent };
