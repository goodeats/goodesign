import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '#lib/utils';

const flexVariants = cva('flex', {
  variants: {
    display: {
      default: 'flex',
      inline: 'inline-flex',
      none: 'hidden',
    },
    direction: {
      row: 'flex-row',
      col: 'flex-col',
      rowReverse: 'flex-row-reverse',
      colReverse: 'flex-col-reverse',
    },
    wrap: {
      default: undefined, // comment: by default, it should adapt to the container
      noWrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      reverse: 'flex-wrap-reverse',
    },
    justify: {
      default: 'justify-start',
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
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
  },
  defaultVariants: {
    display: 'default',
    // direction: 'row',
    justify: 'default',
    // default values for wrap, justify, align, and gap can be left undefined
  },
});

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  asChild?: boolean;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      display,
      direction,
      wrap,
      justify,
      align,
      gap,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(
          flexVariants({
            display,
            direction,
            wrap,
            justify,
            align,
            gap,
            className,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Flex.displayName = 'Flex';

export { Flex, flexVariants };
