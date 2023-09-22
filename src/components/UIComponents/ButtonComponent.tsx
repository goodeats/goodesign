import { Button } from '#lib/main';
import React from 'react';

interface ButtonProps {}

const ButtonComponent: React.FC<ButtonProps> = () => {
  return (
    <div>
      <h3>ButtonComponent!</h3>
      <div className="card">
        <Button variant="secondary" size="lg">
          click
        </Button>
      </div>
    </div>
  );
};

export { ButtonComponent };
