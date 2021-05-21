import React from "react";
import styled from "styled-components"
import { transparentize } from "polished"

import Image from "next/image"

interface Props {
    toggleTheme(): void;
    theme: {
        name: string;
        colors: any
    }
}

const Container = styled.label`
    height: 38px;
    width: 75px;
    border-radius: 20px;
    margin: 0 1rem;
    background: ${props => transparentize(0.8, props.theme.colors.white)};
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Sun = styled.span`
    position: absolute;
    top: 2px;
    right: 2px;
    width: 34px;
    height: 34px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => transparentize(0.4, props.theme.colors.white)};
    border-radius: 50%;
`

const Moon = styled(Sun)`
    left: 2px;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 4px;
    z-index: 2;
`

const Input = styled.input`
    position: absolute;
    top: -99999px;
    left: -99999px;
`

const ThemeToogle: React.FC<Props> = ({ toggleTheme, theme }) => {
    const dark = theme.name === "dark"


    return (
        <>
            <Input type="checkbox" />
            <Container onClick={() => toggleTheme()}>
                <Icon>
                    <Image src={dark ? "/sun.svg" : "/sunwhite.svg"} width="28px" height="28px" /> 
                </Icon>
                <Icon>
                    <Image src={dark ? "/moonwhite.png" : "/moon.png"} width="28px" height="28px" />
                </Icon>
                {dark ? <Sun /> : <Moon />}
            </Container>
        </>
    )
}

export default ThemeToogle;
