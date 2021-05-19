import React from 'react'
import Link, { LinkProps } from "next/link";

interface ILinkProps extends LinkProps {
    className?: string;
 }

const StyledLink: React.FC<React.PropsWithChildren<ILinkProps>> = ({ as, children, href, className }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
    {/* {children} */}
  </Link>
);

export default StyledLink