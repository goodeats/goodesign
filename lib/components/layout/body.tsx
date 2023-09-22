import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '#lib/utils';

const bodyVariants = cva('body', {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BodyProps
  extends React.HTMLAttributes<HTMLBodyElement>,
    VariantProps<typeof bodyVariants> {
  asChild?: boolean;
}

const Body = React.forwardRef<HTMLBodyElement, BodyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'body';
    return (
      <Comp
        className={cn(bodyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Body.displayName = 'Body';

export { Body, bodyVariants };
