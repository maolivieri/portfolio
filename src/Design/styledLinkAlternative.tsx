import React from 'react';
import Link, { LinkProps } from 'next/link';

interface ILinkProps extends LinkProps {
  className?: string;
  customStyle?: string;
}

const StyledLinkAlternative: React.FC<React.PropsWithChildren<ILinkProps>> = ({
  as,
  children,
  href,
  className,
  customStyle
}) => (
  <Link href={href} as={as} passHref>
    {children}
  </Link>
);

export default StyledLinkAlternative;
