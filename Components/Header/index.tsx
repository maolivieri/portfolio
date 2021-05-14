import React from 'react'
import { Container, LinksNav, OptionsNav, LanguageItem, ThemeToggleItem } from './styles'
import NavItem from './NavItem'

interface Props {
    toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    return (
        <Container>
            <LinksNav>
                <NavItem title="About" to="/About"/>
                <NavItem title="Experiences" to="/Experiences"/>
                <NavItem title="Projects" to="/Projects"/>
            </LinksNav>
            <OptionsNav>
                <LanguageItem>BR</LanguageItem>
                <LanguageItem>EN</LanguageItem>
                <ThemeToggleItem>SOL</ThemeToggleItem>
                <ThemeToggleItem>LUA</ThemeToggleItem>
            </OptionsNav>
        </Container>
    )
}

export default Header
