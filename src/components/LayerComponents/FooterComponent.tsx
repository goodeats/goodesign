import { Footer, Section } from '#lib/main';
import React from 'react';

interface FooterComponentProps {}

const FooterComponent: React.FC<FooterComponentProps> = () => {
  return (
    <Section>
      <h3>Footer!</h3>
      <Footer />
    </Section>
  );
};

export { FooterComponent };
