import React from 'react'
import { Container, LinksNav, OptionsNav, LanguageIcon, ThemeToggle } from './styles'
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
                <LanguageIcon>BR</LanguageIcon>
                <LanguageIcon>EN</LanguageIcon>
                <ThemeToggle>SOL</ThemeToggle>
                <ThemeToggle>LUA</ThemeToggle>
            </OptionsNav>
        </Container>
    )
}

export default Header
