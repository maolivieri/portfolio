import React from 'react'
import { Container, Language, NavLink } from './styles'
import ThemeToggle from "../../Design/Toogle"
import Image from "next/image"

interface Props {
    toggleTheme(): void;
    theme: {
        name: string;
        colors: any
    }
}

const Header: React.FC<Props> = ({ toggleTheme, theme }) => {
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
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </Container>
    )
}

export default Header
