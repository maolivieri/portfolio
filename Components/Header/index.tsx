import React from 'react'
import { Container } from './styles'

interface Props {
    toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    return (
        <Container>
            <h1>AAAAAAAAAAA</h1>
        </Container>
    )
}

export default Header
