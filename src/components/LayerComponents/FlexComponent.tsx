import { Flex } from '#lib/main';
import React from 'react';

interface FlexComponentProps {}

const FlexComponent: React.FC<FlexComponentProps> = () => {
  return (
    <div>
      <h2>Flex!</h2>
      <Flex direction="col" gap="3">
        <div className="w-1/2 h-12 bg-red-500">
          <span>yoyo</span>
        </div>
        <div className="w-1/2 h-12 bg-red-500">
          <span>yoyo</span>
        </div>
        <div className="w-1/2 h-12 bg-red-500">
          <span>yoyo</span>
        </div>
      </Flex>
    </div>
  );
};

export { FlexComponent };
