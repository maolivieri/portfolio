import React from 'react';
import { ThemeContext } from 'styled-components';
import { Container, Language, NavLink, MainLinks, ButtonLinks } from './styles';
import ThemeToggle from '../../design/toogle';
import Image from 'next/image';
import { i18n } from 'next-i18next';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const themeContext = React.useContext(ThemeContext);
  const dark = themeContext.name === 'dark';

  return (
    <Container>
      <MainLinks>
        <NavLink href="/About">About</NavLink>
        <NavLink href="/Experiences">Experiences</NavLink>
        <NavLink href="/Projects">Projects</NavLink>
      </MainLinks>
      <ButtonLinks>
        <Language onClick={() => i18n.changeLanguage('pt')}>
          <Image
            src={dark ? '/icons/header/BR.png' : '/icons/header/BRCor.png'}
            width="100%"
            height="100%"
          />
        </Language>
        <Language onClick={() => i18n.changeLanguage('en')}>
          <Image
            src={dark ? '/icons/header/EN.png' : '/icons/header/ENCor.png'}
            width="100%"
            height="100%"
          />
        </Language>
        <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
      </ButtonLinks>
    </Container>
  );
};

export default Header;
