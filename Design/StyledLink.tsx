import React from 'react';
import Link, { LinkProps } from 'next/link';

interface ILinkProps extends LinkProps {
  className?: string;
  customStyle?: string;
}

export const StyledLink: React.FC<React.PropsWithChildren<ILinkProps>> = ({
  as,
  children,
  href,
  className,
  customStyle
}) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
    {/* {children} */}
  </Link>
);
