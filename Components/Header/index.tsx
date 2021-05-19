import React from 'react'
import { Container, Language, ThemeToggle, NavLink } from './styles'
import Image from "next/image"

interface Props {
    toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    return (
        <Container>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}> 
                <NavLink href="/About" >About</NavLink>
                <NavLink href="/Experiences">Experiences</NavLink>
                <NavLink href="/Projects">Projects</NavLink>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}> 
                <Language>
                    <Image src="/BR.png" width="38px" height="38px"/>
                </Language>
                <Language>
                    <Image src="/EN.png" width="38px" height="38px"/>
                </Language>
                <ThemeToggle>SOL</ThemeToggle>
                <ThemeToggle>LUA</ThemeToggle>
            </div>
        </Container>
    )
}

export default Header
