import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '#lib/utils';

const asideVariants = cva('aside', {
  variants: {
    variant: {
      default:
        'container flex flex-col h-full min-h-[100px] px-0 pb-12 md:px-8 b-2 bg-secondary mb-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface AsideProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof asideVariants> {
  asChild?: boolean;
}

const Aside = React.forwardRef<HTMLElement, AsideProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'aside';
    return (
      <Comp
        className={cn(asideVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Aside.displayName = 'Aside';

export { Aside, asideVariants };
