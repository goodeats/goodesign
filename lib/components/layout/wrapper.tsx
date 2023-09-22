import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '#lib/utils';

const wrapperVariants = cva('wrapper', {
  variants: {
    variant: {
      default: 'flex w-full h-full',
      center: 'flex justify-center items-center',
      column: 'flex flex-col',
      row: 'flex flex-row',
      page: 'flex h-screen flex-col justify-between',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface WrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof wrapperVariants> {
  asChild?: boolean;
}

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(wrapperVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Wrapper.displayName = 'Wrapper';

export { Wrapper, wrapperVariants };
