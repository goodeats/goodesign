import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '#lib/utils';

const gridVariants = cva('grid', {
  variants: {
    display: {
      default: 'grid',
      inline: 'inline-grid',
      none: 'hidden',
    },
    templateColumns: {
      // Define according to your needs
      auto: 'grid-cols-auto',
      '1': 'grid-cols-1',
      '2': 'grid-cols-2',
      // Add more as needed
    },
    templateRows: {
      // Define according to your needs
      auto: 'grid-rows-auto',
      '1': 'grid-rows-1',
      '2': 'grid-rows-2',
      // Add more as needed
    },
    gap: {
      // Defined according to Tailwind's spacing scale
      '1': 'gap-1',
      '2': 'gap-2',
      '3': 'gap-3',
      '4': 'gap-4',
      '5': 'gap-5',
      '6': 'gap-6',
      '8': 'gap-8',
      '9': 'gap-9',
    },
    justifyItems: {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    },
    alignItems: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: {
    display: 'default',
    justifyItems: 'start',
    alignItems: 'start',
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  asChild?: boolean;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      display,
      templateColumns,
      templateRows,
      gap,
      justifyItems,
      alignItems,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(
          gridVariants({
            display,
            templateColumns,
            templateRows,
            gap,
            justifyItems,
            alignItems,
            className,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';

export { Grid, gridVariants };
