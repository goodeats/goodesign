import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '#lib/utils';

const containerVariants = cva('container', {
  variants: {
    variant: {
      default: 'flex w-full h-full',
      center: 'flex justify-center items-center',
      column: 'flex flex-col',
      row: 'flex flex-row',
      page: 'flex flex-col min-h-screen',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(containerVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container, containerVariants };
