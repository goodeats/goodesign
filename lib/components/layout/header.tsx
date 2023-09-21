import * as React from 'react';

import { cn } from '#lib/utils';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...props }, ref) => (
    <header ref={ref} className={cn('container py-6', className)} {...props} />
  )
);
Header.displayName = 'Header';

export { Header };
