import React from 'react';
import { FlexComponent } from './FlexComponent';
import { HeaderComponent } from './HeaderComponent';
import { NavComponent } from './NavComponent';
import { MainComponent } from './MainComponent';
import { ArticleComponent } from './ArticleComponent';
import { SectionComponent } from './SectionComponent';
import { AsideComponent } from './AsideComponent';
import { FooterComponent } from './FooterComponent';
import { Section } from '#lib/main';

interface LayerProps {}

const LayerComponents: React.FC<LayerProps> = () => {
  return (
    <Section>
      <h2>LayerComponents!</h2>
      <FlexComponent />
      <HeaderComponent />
      <NavComponent />
      <MainComponent />
      <ArticleComponent />
      <SectionComponent />
      <AsideComponent />
      <FooterComponent />
    </Section>
  );
};

export { LayerComponents };
