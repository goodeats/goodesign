import { Aside, Section } from '#lib/main';
import React from 'react';

interface AsideComponentProps {}

const AsideComponent: React.FC<AsideComponentProps> = () => {
  return (
    <Section>
      <h3>Aside!</h3>
      <Aside />
    </Section>
  );
};

export { AsideComponent };
