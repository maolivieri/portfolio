import React from "react"
import styled, { StyledComponent }  from "styled-components"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { transparentize } from "polished"


interface Props {
    disabled?: Boolean;
    onClick(T: any): void
}

const Circle = styled.div`
    background: ${props => transparentize("0.5", props.theme.colors.white)};
    color: ${props => props.theme.colors.black};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${(props: Props) => props.disabled ? "hidden" : "visible"};
`

export const ArrowLeft: React.FC<Props> = ({ disabled, onClick }) => {

    return (
        <Circle onClick={onClick} disabled={disabled}>
            <FaArrowLeft />
        </Circle>
    )
}

export const ArrowRight: React.FC<Props> = ({ disabled, onClick }) => {

    return (
        <Circle onClick={onClick} disabled={disabled}>
            <FaArrowRight />
        </Circle>
    )
}