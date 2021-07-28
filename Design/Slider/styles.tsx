import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { transparentize } from 'polished';

interface Props {
  disabled?: Boolean;
  onClick(T: any): void;
}

interface DotProps {
  isActive: boolean;
  hasPast: boolean;
  theme: DefaultTheme;
}

const Circle = styled.div`
  background: ${(props) => transparentize('0.5', props.theme.colors.white)};
  color: ${(props) => props.theme.colors.black};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${(props: Props) => (props.disabled ? 'hidden' : 'visible')};
`;

export const ArrowLeft: React.FC<Props> = ({ disabled, onClick }) => {
  return (
    <Circle onClick={onClick} disabled={disabled}>
      <FaArrowLeft />
    </Circle>
  );
};

export const ArrowRight: React.FC<Props> = ({ disabled, onClick }) => {
  return (
    <Circle onClick={onClick} disabled={disabled}>
      <FaArrowRight />
    </Circle>
  );
};

export const SlideBarContainer = styled.div`
  /* padding-bottom: 2rem; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 3rem;
  z-index: 1000;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const SlideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  background: ${(props) => transparentize('0.8', props.theme.colors.white)};
`;

export const SlideBarDot = styled.div`
  background: ${(props: DotProps) =>
    props.hasPast
      ? transparentize('0.3', props.theme.colors.white)
      : transparentize('0.8', props.theme.colors.white)};
  width: 4rem;
  height: 0.5rem;
  border-radius: ${(props: DotProps) =>
    props.isActive ? '0px 4px 4px 0px' : '0px'};
`;
