import React from 'react';
import styled, { ThemeContext, useTheme } from 'styled-components';
import { transparentize } from 'polished';

import Image from 'next/image';

interface IProps {
  toggleTheme(): void;
  dark: boolean;
}

const Container = styled.label`
  cursor: pointer;
  background: ${(props) => transparentize(0.8, props.theme.colors.white)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.25rem;
  height: 2.6rem;
  width: 5rem;
  border-radius: 1.5rem;

  @media (max-width: 1200px) {
    /* height: 38px;
    width: 75px; */
    /* border-radius: 20px; */
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    /* height: 30px;
    width: 65px; */
    /* border-radius: 16px; */
    margin: 0 0.8rem;
  }
`;

const Left = styled.span`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => transparentize(0.4, props.theme.colors.white)};
  border-radius: 50%;

  /* @media (max-width: 1200px) {
    top: 2px;
    right: 2px;
    width: 34px;
    height: 34px;
    padding: 3px;
  }

  @media (max-width: 768px) {
    top: 1px;
    right: 1px;
    width: 28px;
    height: 28px;
    padding: 1.5px;
  } */
`;

const Right = styled(Left)`
  left: 0.2rem;

  /* @media (max-width: 1200px) {
    left: 2px;
  }

  @media (max-width: 768px) {
    left: 1px;
  } */
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 9px;
  z-index: 2;

  @media (max-width: 1200px) {
    padding: 0 4px;
  }

  @media (max-width: 768px) {
    padding: 0 1px;
  }
`;

const Input = styled.input`
  position: absolute;
  top: -99999px;
  left: -99999px;
`;

const ThemeToogle: React.FC<IProps> = ({ toggleTheme, dark }) => {
  return (
    <>
      <Input type="checkbox" />
      <Container onClick={() => toggleTheme()}>
        <Icon>
          <Image src="/icons/header/sunwhite.svg" width="100%" height="100%" />
        </Icon>
        <Icon>
          <Image src="/icons/header/moon.png" width="100%" height="100%" />
        </Icon>
        {dark ? <Left /> : <Right />}
      </Container>
    </>
  );
};

export default ThemeToogle;
