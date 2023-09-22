import { Button } from '#lib/main';
import React from 'react';

interface ButtonProps {}

const ButtonComponent: React.FC<ButtonProps> = () => {
  return (
    <div>
      <h2>ButtonComponent!</h2>
      <div className="card">
        <Button variant="secondary" size="lg">
          click
        </Button>
      </div>
    </div>
  );
};

export { ButtonComponent };
