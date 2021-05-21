import React from 'react'
import { ThemeContext } from "styled-components"
import { Container, Language, NavLink } from './styles'
import ThemeToggle from "../../Design/Toogle"
import Image from "next/image"

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const themeContext = React.useContext(ThemeContext)
    const dark = themeContext.name === "dark"

    return (
        <Container>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}> 
                <NavLink href="/About" >About</NavLink>
                <NavLink href="/Experiences">Experiences</NavLink>
                <NavLink href="/Projects">Projects</NavLink>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}> 
                <Language>
                    <Image src={dark ? "/BR.png" : "/BRCor.png"} width="38px" height="38px"/>
                </Language>
                <Language>
                    <Image src={dark ? "/EN.png" : "/ENCor.png"} width="38px" height="38px"/>
                </Language>
                <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
            </div>
        </Container>
    )
}

export default Header
