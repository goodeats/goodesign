import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '#lib/utils';

const articleVariants = cva('article w-full', {
  variants: {
    variant: {
      default:
        'container flex h-full min-h-[100px] px-0 pb-12 md:px-8 b-2 bg-secondary mb-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ArticleProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof articleVariants> {
  asChild?: boolean;
}

const Article = React.forwardRef<HTMLElement, ArticleProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'article';
    return (
      <Comp
        className={cn(articleVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Article.displayName = 'Article';

export { Article, articleVariants };
