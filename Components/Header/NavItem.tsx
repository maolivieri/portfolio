import React from 'react'
import { NavigationItem } from './styles'
import Link from 'next/link'

interface Props {
    title: string;
    to: string
}

const NavItem: React.FC<Props> = ({ title, to }) => {
    return (
        <NavigationItem>
            <Link href={to}>
                {title}
            </Link>
        </NavigationItem>
    )
}

export default NavItem
