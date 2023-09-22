import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '#lib/utils';

const sectionVariants = cva('section w-full', {
  variants: {
    variant: {
      default:
        'container flex flex-col h-full min-h-[100px] px-0 pb-12 md:px-8 b-2 bg-primary mb-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  asChild?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'section';
    return (
      <Comp
        className={cn(sectionVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Section.displayName = 'Section';

export { Section, sectionVariants };
