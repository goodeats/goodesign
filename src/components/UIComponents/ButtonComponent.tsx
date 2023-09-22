import { Article, Button } from '#lib/main';
import React from 'react';

interface ButtonProps {}

const ButtonComponent: React.FC<ButtonProps> = () => {
  return (
    <Article>
      <h3>ButtonComponent!</h3>
      <div className="card">
        <Button variant="secondary" size="lg">
          click
        </Button>
      </div>
    </Article>
  );
};

export { ButtonComponent };
