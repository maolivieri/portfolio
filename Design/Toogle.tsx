import React from 'react';
import styled, { ThemeContext, useTheme } from 'styled-components';
import { transparentize } from 'polished';

import Image from 'next/image';

interface Props {
  toggleTheme(): void;
  dark: boolean;
}

const Container = styled.label`
  height: 48px;
  width: 95px;
  border-radius: 25px;
  margin: 0 1.25rem;
  background: ${(props) => transparentize(0.8, props.theme.colors.white)};
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    height: 38px;
    width: 75px;
    border-radius: 20px;
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    height: 30px;
    width: 65px;
    border-radius: 16px;
    margin: 0 0.8rem;
  }
`;

const Sun = styled.span`
  position: absolute;
  top: 2.5px;
  right: 2.5px;
  width: 43px;
  height: 43px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => transparentize(0.4, props.theme.colors.white)};
  border-radius: 50%;

  @media (max-width: 1200px) {
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
  }
`;

const Moon = styled(Sun)`
  left: 2.5px;

  @media (max-width: 1200px) {
    left: 2px;
  }

  @media (max-width: 768px) {
    left: 1px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5px 9px;
  z-index: 2;

  @media (max-width: 1200px) {
    padding: 2px 4px;
  }

  @media (max-width: 768px) {
    padding: 1px 1px;
  }
`;

const Input = styled.input`
  position: absolute;
  top: -99999px;
  left: -99999px;
`;

const ThemeToogle: React.FC<Props> = ({ toggleTheme, dark }) => {
  return (
    <>
      <Input type="checkbox" />
      <Container onClick={() => toggleTheme()}>
        <Icon>
          <Image
            // src={
            //   dark ? '/icons/header/sun.svg' : '/icons/header/sunwhite.svg'
            // }
            src="/icons/header/sunwhite.svg"
            width="28px"
            height="28px"
          />
        </Icon>
        <Icon>
          <Image
            // src={dark ? '/icons/header/moon.png' : '/icons/header/moonwhite.png'}
            src="/icons/header/moon.png"
            width="28px"
            height="28px"
          />
        </Icon>
        {dark ? <Sun /> : <Moon />}
      </Container>
    </>
  );
};

export default ThemeToogle;
